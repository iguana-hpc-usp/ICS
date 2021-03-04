package main

import (
	"bytes"
	"database/sql"
	"fmt"
	_ "github.com/mattn/go-sqlite3"
	"io"
	"mime/multipart"
	"reflect"
	"strconv"
	"strings"
)

func dbConnect() *sql.DB {

	var db *sql.DB

	dir, _ := UtilDirExists("./data")
	if !dir {
		UtilEnsureDir("./data")
	}

	db, _ = sql.Open("sqlite3", "./data/db.db")
	Log("", nil, "0")
	//defer db.Close()

	_, _ = db.Exec("PRAGMA foreign_keys=ON")
	Log("", nil, "0")

	return db

}

func dbCreate() {

	sqlTables := "CREATE TABLE IF NOT EXISTS Users " +
		"(Id INTEGER PRIMARY KEY, Name TEXT NOT NULL, Password TEXT NOT NULL, " +
		"Email TEXT NOT NULL UNIQUE, Module TEXT DEFAULT 'User' NOT NULL," +
		"ForceChangePass INTEGER DEFAULT 0, TempChangePass TEXT NULL);"

	sqlTables += "CREATE TABLE IF NOT EXISTS Groups " +
		"(Id INTEGER PRIMARY KEY, Name TEXT NOT NULL UNIQUE, Description TEXT NULL);"

	sqlTables += "CREATE TABLE IF NOT EXISTS Members " +
		"(Id INTEGER PRIMARY KEY, IdGroup INTEGER NOT NULL, IdUser INTEGER NOT NULL," +
		"CONSTRAINT fk_Group FOREIGN KEY(IdGroup) REFERENCES Groups(Id) ON DELETE CASCADE," +
		"CONSTRAINT fk_User FOREIGN KEY(IdUser) REFERENCES Users(Id) ON DELETE CASCADE);" +
		"CREATE UNIQUE INDEX IF NOT EXISTS ux_Members ON Members(IdGroup, IdUser);"

	sqlTables += "CREATE TABLE IF NOT EXISTS Exercises " +
		"(Id INTEGER PRIMARY KEY, Title TEXT NOT NULL, Date DATETIME NOT NULL, " +
		"MaxSubmissions INTEGER DEFAULT 0, " +
		"MaxTimeout INTEGER DEFAULT 50, MaxFileSize INTEGER DEFAULT 0," +
		"CheckCount INTEGER DEFAULT 0, CheckList TEXT NULL," +
		"Command TEXT NULL, ExecTime TEXT NULL, " +
		"Content TEXT NULL, Code TEXT NULL, Result TEXT NULL);"

	sqlTables += "CREATE TABLE IF NOT EXISTS ExerciseGroups " +
		"(Id INTEGER PRIMARY KEY, IdExercise INTEGER NOT NULL, IdGroup INTEGER NOT NULL," +
		"CONSTRAINT fk_Group FOREIGN KEY(IdGroup) REFERENCES Groups(Id) ON DELETE CASCADE," +
		"CONSTRAINT fk_Exercise FOREIGN KEY(IdExercise) REFERENCES Exercises(Id) ON DELETE CASCADE);" +
		"CREATE UNIQUE INDEX IF NOT EXISTS ux_ExercisesGroups ON ExerciseGroups(IdGroup, IdExercise);"

	sqlTables += "CREATE TABLE IF NOT EXISTS ExerciseAnswers " +
		"(Id INTEGER PRIMARY KEY, IdUser INTEGER NOT NULL, IdExercise INTEGER NOT NULL, " +
		"Date DATETIME NOT NULL, Code TEXT NOT NULL, Result TEXT NULL, " +
		"Status TEXT NULL, CheckCount INTEGER DEFAULT 0, CheckList TEXT NULL," +
		"Command TEXT NULL, ExecTime TEXT NULL, Comment TEXT NULL,  " +
		"CONSTRAINT fk_User FOREIGN KEY(IdUser) REFERENCES Users(Id) ON DELETE CASCADE," +
		"CONSTRAINT fk_Exercise FOREIGN KEY(IdExercise) REFERENCES Exercises(Id) ON DELETE CASCADE );"

	sqlTables += "CREATE TABLE IF NOT EXISTS ExerciseScores " +
		"(Id INTEGER PRIMARY KEY, IdExercise INTEGER NOT NULL, IdUser INTEGER NOT NULL," +
		"Feedback TEXT NULL, Score REAL NULL, " +
		"CONSTRAINT fk_User FOREIGN KEY(IdUser) REFERENCES Users(Id) ON DELETE CASCADE," +
		"CONSTRAINT fk_Exercise FOREIGN KEY(IdExercise) REFERENCES Exercises(Id) ON DELETE CASCADE);" +
		"CREATE UNIQUE INDEX IF NOT EXISTS ux_ExerciseScores ON ExerciseScores(IdUser, IdExercise);"

	sqlTables += "CREATE TABLE IF NOT EXISTS ExerciseFiles " +
		"(Id INTEGER PRIMARY KEY, IdExercise INTEGER NOT NULL," +
		"FileName TEXT NULL, FileContent BLOB NULL, Size INTEGER DEFAULT 0," +
		"CONSTRAINT fk_Exercise FOREIGN KEY(IdExercise) REFERENCES Exercises(Id) ON DELETE CASCADE);" +
		"CREATE UNIQUE INDEX IF NOT EXISTS ux_ExerciseFiles ON ExerciseFiles(FileName);"

	sqlTables += "CREATE TABLE IF NOT EXISTS AnswersHistory " +
		"(Id INTEGER PRIMARY KEY, IdExerciseAnswers INTEGER NOT NULL, " +
		"Date DATETIME NOT NULL, Event TEXT NOT NULL, Status TEXT NULL," +
		"CONSTRAINT fk_ExerciseAnswers FOREIGN KEY(IdExerciseAnswers) " +
		"REFERENCES ExerciseAnswers(Id) ON DELETE CASCADE );"

	sqlTables += "CREATE TABLE IF NOT EXISTS CodeTemp " +
		"(Id INTEGER PRIMARY KEY, IdUser INTEGER NOT NULL, " +
		"IdExerciseAnswers INTEGER NULL, " +
		"Code TEXT NULL, Command TEXT NULL, " +
		"CONSTRAINT fk_User FOREIGN KEY(IdUser) REFERENCES Users(Id) ON DELETE CASCADE);" +
		"CREATE UNIQUE INDEX IF NOT EXISTS ux_CodeTemp ON CodeTemp(IdUser, IdExerciseAnswers);"

	//Let's check is Admin changes his Password or Name...
	sqlTables += "INSERT OR REPLACE INTO Users (Id, Name, Password, Email, Module, ForceChangePass, TempChangePass) " +
		"VALUES (1, '"+GLOBAL_HOST.Owner+"', " +
		"'"+UtilCreateHash(GLOBAL_HOST.Password)+"', " +
		"'"+GLOBAL_HOST.Owner+"', 'Admin', 0, '');"

	db := dbConnect()
	defer db.Close()

	Log(db, nil, "0")
	_, err := db.Exec(sqlTables)
	Log("", err, "0")

}

func dbView(custom string, filter []ParamStr) interface{} {

	sqlCustom := ""

	/////////// HOST-CREDENTIALS ////////////////////
	if custom == "host-credentials" {
		sqlCustom = "SELECT * FROM Users WHERE Email='"+filter[0].Value+"'"
	}

	/////////// USERS ////////////////////
	if custom == "users" {
		sqlCustom = "SELECT * FROM Users ORDER BY Name"
	}
	if custom == "users-edit" {
		sqlCustom = "SELECT * FROM Users WHERE Id='"+filter[0].Value+"'"
	}

	/////////// GROUPS ////////////////////
	if custom == "groups" {
		sqlCustom = "SELECT *, (SELECT COUNT(*) FROM Members m WHERE m.IdGroup = g.Id) as mCount" +
			" FROM Groups g ORDER BY Name"
	}
	if custom == "groups-edit" {
		sqlCustom = "SELECT * FROM Groups WHERE Id='"+filter[0].Value+"'"
	}

	/////////// MEMBERS ////////////////////
	if custom == "members" {
		sqlCustom = "SELECT * FROM Users WHERE Id IN " +
			"(SELECT IdUser FROM Members WHERE IdGroup = " + filter[0].Value + ") ORDER BY Name"
	}

	/////////// EXERCISES ////////////////////
	if custom == "exercises" {
		sqlCustom = "SELECT e.Title, e.Id, e.MaxSubmissions, e.Code, " +
			"strftime('%Y-%m-%d %H:%M',e.Date) as Date, e.Content," +
			"(SELECT COUNT(DISTINCT IdUser) FROM ExerciseAnswers ea WHERE " +
			"e.Id = ea.IdExercise) as cAnswers, e.MaxTimeout, " +
			"(SELECT COUNT(*) FROM ExerciseGroups eg WHERE eg.IdExercise = e.Id) as cGroups, " +
			"(JulianDay(Date)-JulianDay('now','localtime')) as IsExpired," +
			"e.ExecTime, e.Command, e.CheckCount, e.CheckList " +
			"FROM Exercises e ORDER BY e.Date DESC"
	}
	if custom == "exercises-user" {
		sqlCustom = "SELECT e.Title, e.Id, e.MaxSubmissions, e.Code, " +
			"strftime('%Y-%m-%d %H:%M',e.Date) as Date, e.Content, e.MaxTimeout," +
			"(SELECT COUNT(DISTINCT IdUser) FROM ExerciseAnswers ea WHERE " +
			"e.Id = ea.IdExercise AND ea.IdUser = '"+filter[0].Value+"') as cAnswers," +
			"(SELECT COUNT(*) FROM ExerciseGroups eg WHERE eg.IdExercise = e.Id) as cGroups, " +
			"(JulianDay(Date)-JulianDay('now','localtime')) as IsExpired," +
			"e.ExecTime, e.Command, e.CheckCount, e.CheckList " +
			"FROM Exercises e, ExerciseGroups eg, Groups g, Members m " +
			"WHERE e.Id = eg.IdExercise " +
			"AND g.Id = eg.IdGroup " +
			"AND m.IdGroup = eg.IdGroup " +
			"AND m.IdUser = '"+filter[0].Value+"' " +
			"GROUP BY e.Id " +
			"ORDER BY e.Date DESC"
	}
	if custom == "exercises-edit" {
		sqlCustom = "SELECT *," +
			"ltrim(strftime('%Y',Date), '0') as EDYear," +
			"ltrim(strftime('%m',Date), '0') as EDMonth," +
			"ltrim(strftime('%d',Date), '0') as EDDay," +
			"ltrim(strftime('%H',Date), '0') as EDHour," +
			"ltrim(strftime('%M',Date), '0') as EDMinute " +
			"FROM Exercises WHERE Id = '"+filter[0].Value+"' " +
			"ORDER BY Date DESC"
	}

	/////////// EXERCISE-GROUPS ////////////////////
	if custom == "exercises-groups" {
		sqlCustom = "SELECT * FROM Groups WHERE Id IN (SELECT IdGroup FROM ExerciseGroups " +
			"WHERE IdExercise = " + filter[0].Value + ") ORDER BY Name"
	}

	/////////// EXERCISE-ANSWERS ////////////////////
	if custom == "exercises-answer-history" {
		sqlCustom = "SELECT * FROM AnswersHistory WHERE IdExerciseAnswers " +
			"= " + filter[0].Value + " ORDER BY Date DESC"
	}
	if custom == "exercises-answer" {
		sqlCustom = "SELECT *," +
			"((JulianDay(Date)-JulianDay('now','localtime')) * 86400.0) as ExIsExpired " +
			" FROM Exercises WHERE Id = " + filter[0].Value
	}
	if custom == "exercises-answer-admin" {
		sqlCustom = "SELECT e.Title as Title, ea.Id as Id, u.Name as Name, " +
			"ea.IdUser, ea.Status as Status, e.MaxSubmissions, e.MaxFileSize, " +
			"(SELECT Id FROM ExerciseScores s WHERE s.IdUser = u.Id AND s.IdExercise = e.Id) as IdScore," +
			"(SELECT Score FROM ExerciseScores s WHERE s.IdUser = u.Id AND s.IdExercise = e.Id) as Score," +
			"(SELECT Feedback FROM ExerciseScores s WHERE s.IdUser = u.Id AND s.IdExercise = e.Id) as Feedback," +
			"strftime('%Y-%m-%d %H:%M',ea.Date) as Date, ea.Comment, ea.IdExercise," +
			"(SELECT COUNT(*) FROM AnswersHistory a WHERE a.IdExerciseAnswers = ea.Id) as History," +
			"(SELECT COUNT(*) FROM ExerciseAnswers ea1 WHERE ea1.IdExercise = e.Id AND " +
			"ea1.IdUser = u.Id) as TotalEx," +
			"((JulianDay(ea.Date)-JulianDay('now','localtime')) * 86400.0) as IsExpired," +
			"((JulianDay(e.Date)-JulianDay('now','localtime')) * 86400.0) as ExIsExpired," +
			"(JulianDay(ea.Date)-JulianDay(ea.Date)) as TimePassed, " +
			"ea.ExecTime, ea.Command, ea.Code, ea.Result, ea.CheckCount, ea.CheckList " +
			"FROM ExerciseAnswers ea, Users u, Exercises e WHERE u.Id = ea.IdUser AND " +
			" e.Id = ea.IdExercise AND ea.IdExercise=" + filter[0].Value +
			" ORDER BY u.Name, ea.Date ASC, ea.Id ASC"
	}
	if custom == "exercises-answer-user" {
		sqlCustom = "SELECT e.Title as Title, ea.Id as Id, u.Name as Name, " +
			"ea.IdUser, ea.Status as Status, e.MaxSubmissions, e.MaxFileSize, " +
			"(SELECT Id FROM ExerciseScores s WHERE s.IdUser = u.Id AND s.IdExercise = e.Id) as IdScore," +
			"(SELECT Score FROM ExerciseScores s WHERE s.IdUser = u.Id AND s.IdExercise = e.Id) as Score," +
			"(SELECT Feedback FROM ExerciseScores s WHERE s.IdUser = u.Id AND s.IdExercise = e.Id) as Feedback," +
			"strftime('%Y-%m-%d %H:%M',ea.Date) as Date, ea.Comment, ea.IdExercise, " +
			"(SELECT COUNT(*) FROM AnswersHistory a WHERE a.IdExerciseAnswers = ea.Id) as History," +
			"(SELECT COUNT(*) FROM ExerciseAnswers ea1 WHERE ea1.IdExercise = e.Id " +
			"AND ea1.IdUser = u.Id) as TotalEx," +
			"((JulianDay(ea.Date)-JulianDay('now','localtime')) * 86400.0) as IsExpired," +
			"((JulianDay(e.Date)-JulianDay('now','localtime')) * 86400.0) as ExIsExpired," +
			"(JulianDay(ea.Date)-JulianDay(ea.Date)) as TimePassed, " +
			"ea.ExecTime, ea.Command, ea.Code, ea.Result, ea.CheckCount, ea.CheckList " +
			"FROM ExerciseAnswers ea, Users u, Exercises e WHERE u.Id = ea.IdUser " +
			" AND e.Id = ea.IdExercise AND ea.IdExercise=" + filter[0].Value +
			" AND ea.IdUser =" + filter[1].Value + " ORDER BY u.Name, ea.Date ASC, ea.Id ASC"
	}

	/////////// EXERCISE-ANSWERS-EDIT ////////////////////
	if custom == "exercises-answer-edit" {
		sqlCustom = "SELECT e.*, u.Name FROM ExerciseAnswers e, Users u " +
			"WHERE e.IdUser = u.Id AND e.Id = " + filter[0].Value
	}
	if custom == "exercises-answer-files" {
		sqlCustom = "SELECT Id, IdExercise, FileName, Size FROM ExerciseFiles WHERE IdExercise = " + filter[0].Value
	}

	/////////// CODE-TEMP ////////////////////
	if custom == "code-temp" {
		sqlCustom = "SELECT * FROM CodeTemp WHERE IdUser = " + filter[0].Value
		if filter[1].Value != "" {
			sqlCustom = "SELECT * FROM CodeTemp WHERE IdUser = " + filter[0].Value + " AND " +
				"IdExerciseAnswers = " + filter[1].Value
		}
	}

	Log("", nil, "0")

	return queryToJson(sqlCustom)
}

func dbDrop(custom string, filter []ParamStr) ResponseStr {

	var ret ResponseStr

	sqlCustom := ""

	if custom == "users" {
		sqlCustom = "DELETE FROM Users WHERE Id = '"+filter[0].Value+"'"
	}
	if custom == "groups" {
		sqlCustom = "DELETE FROM Groups WHERE Id = '"+filter[0].Value+"'"
	}
	if custom == "members" {
		sqlCustom = "DELETE FROM Members WHERE " +
			"IdGroup = " + filter[0].Value + " AND IdUser = " + filter[1].Value
	}
	if custom == "exercises" {
		sqlCustom = "DELETE FROM Exercises WHERE Id = '"+filter[0].Value+"'"

	}
	if custom == "exercises-groups" {
		sqlCustom = "DELETE FROM ExerciseGroups WHERE " +
			"IdExercise = " + filter[0].Value + " AND IdGroup = " + filter[1].Value
	}
	if custom == "exercises-answer" {
		sqlCustom = "DELETE FROM ExerciseAnswers WHERE Id = '"+filter[0].Value+"'"
	}
	if custom == "exercises-files" {
		sqlCustom = "DELETE FROM ExerciseFiles WHERE Id = '"+filter[0].Value+"'"
	}

	db := dbConnect()
	defer db.Close()

	res, err := db.Exec(sqlCustom)
	Log("", err, "0")

	if err != nil {
		ret.Name = "error"
		ret.Status = "Error while updating device with ID: " + err.Error()
	} else {
		rowsAff, _ := res.RowsAffected()
		if rowsAff > 0 {
			ret.Name = "ok"
			ret.Status = "Record deleted successfully."
		} else {
			ret.Name = "info"
			ret.Status = "Didn't affect on any row."
		}
	}

	return ret
}


// BACKEND INTERNAL COMMUNICATION
func dbListUsers(email string) UsersStr {

	db := dbConnect()
	defer db.Close()

	user := UsersStr{}

	rows, err := db.Query("SELECT Name, Id, Password, Module, TempChangePass " +
		"FROM Users WHERE Email = '" + email + "'")
	Log("", err, "0")

	for rows.Next() {
		rows.Scan(&user.Name, &user.Id, &user.Password,
			&user.Module, &user.TempChangePass)
	}

	return user
}

// BACKEND INTERNAL COMMUNICATION
func dbGetFile(Id string, Name string) (string, []byte) {
	db := dbConnect()
	defer db.Close()

	sql := ""
	if Id != "" {
		sql = "Id = '" + Id + "'"
	}
	if Name != "" {
		sql = "FileName = '" + Name + "'"
	}

	rows, err := db.Query("SELECT FileName, FileContent FROM ExerciseFiles WHERE " + sql)
	Log("", err, "0")

	var fileName string
	var fileContent []byte

	for rows.Next() {
		rows.Scan(&fileName, &fileContent)
	}

	return fileName, fileContent
}

func dbUpdate(t interface{}, table string) ResponseStr {
	db := dbConnect()
	defer db.Close()

	querySql := jsonToQuery(t, table)

	res, err := db.Exec(querySql)
	Log("", err, "0")

	var ret ResponseStr
	ret.Name = "info"
	ret.Status = "Didn't affect on any row."

	if err != nil {
		ret.Name = "error"
		ret.Status = "Error while updating device with ID: " + err.Error()
	} else {
		rowsAff, err := res.RowsAffected()
		Log("", err, "0")

		if rowsAff > 0 {
			ret.Name = "ok"
			ret.Status = "Successfully update table."
		}
		lastId, err := res.LastInsertId()
		if lastId > 0 {
			ret.Name = "ok"
			ret.Status = strconv.FormatInt(lastId, 10)
		}
	}

	return ret
}

func dbUpdateFile(exFiles ExerciseFilesStr, file multipart.File) ResponseStr {
	db := dbConnect()
	defer db.Close()

	statement, _ := db.Prepare("INSERT INTO ExerciseFiles (IdExercise, FileName, FileContent, Size) VALUES (?, ?, ?, ?)")

	defer file.Close()

	fileContent := &bytes.Buffer{}
	_, err := io.Copy(fileContent, file)
	Log("", err, "0")

	res, err := statement.Exec(exFiles.IdExercise, exFiles.FileName, fileContent.Bytes(), exFiles.Size)
	Log("", err, "0")

	var ret ResponseStr
	ret.Name = "info"
	ret.Status = "Didn't affect on any row."

	if err != nil {
		ret.Name = "error"
		ret.Status = "Error while updating device with ID: " + err.Error()
	} else {
		rowsAff, err := res.RowsAffected()
		Log("", err, "0")

		if rowsAff > 0 {
			ret.Name = "ok"
			ret.Status = "Successfully update table."
		}
		lastId, err := res.LastInsertId()
		if lastId > 0 {
			ret.Name = "ok"
			ret.Status = strconv.FormatInt(lastId, 10)
		}
	}

	return ret
}

// THIS FUNCTION IS ONLY TO BACKEND
func dbUpdateBack(querySql string) ResponseStr {
	db := dbConnect()
	defer db.Close()

	res, err := db.Exec(querySql)
	Log("", err, "0")

	var ret ResponseStr

	if err != nil {
		ret.Name = "error"
		ret.Status = "Error while updating device with ID: " + err.Error()
	} else {
		rowsAff, err := res.RowsAffected()
		Log("", err, "0")
		if rowsAff > 0 {
			ret.Name = "ok"
			ret.Status = "Successfully update table."
		} else {
			ret.Name = "info"
			ret.Status = "Didn't affect on any row."
		}
	}

	return ret
}

func jsonToQuery(t interface{}, table string) string {

	val := reflect.ValueOf(t)

	var keyIns string
	var valueIns string
	var valueUpd string
	var update string
	var insert string
	var id	string

	first := 0
	if val.Kind() == reflect.Map {
		for _, e := range val.MapKeys() {
			v := val.MapIndex(e)
			switch t := v.Interface().(type) {
			case string:
				if e.String() == "Id" {
					id = t
					continue
				}

				if e.String() == "Password" {
					t = UtilCreateHash(t)
				}

				if first == 1 {
					keyIns += ","
					valueIns += ","
					valueUpd += ","
					first = 0
				}

				dateBeg := ""
				dateEnd := ""
				if e.String() == "Date" {
					if t == "now" {
						dateBeg = "datetime("
						dateEnd = ", 'localtime')"
					} else {
						dateBeg = "datetime("
						dateEnd = ")"
					}
				}

				if t != "" {
					valueUpd += e.String() + "="+dateBeg+"'" +
						strings.Replace(t, "'", "''", -1) + "'"+dateEnd
				} else {
					valueUpd += e.String() + "=null"
				}

				keyIns += e.String()
				if t != "" {
					valueIns += dateBeg+"'" + strings.Replace(t, "'", "''", -1) + "'"+dateEnd
				} else {
					valueIns += "null"
				}

				first = 1

			case float64:
				if e.String() == "Id" {
					id = fmt.Sprintf("%v", t)
					continue
				}

				if first == 1 {
					keyIns += ","
					valueIns += ","
					valueUpd += ","
					first = 0
				}

				if t != 0 {
					valueUpd += e.String() + "=" + fmt.Sprintf("%v", t)
				} else {
					valueUpd += e.String() + "=null"
				}

				keyIns += e.String()
				if t != 0 {
					valueIns += fmt.Sprintf("%v", t)
				} else {
					valueIns += "null"
				}

				first = 1
			}
		}
	}

	if id != "" {
		update += "UPDATE " + table + " SET " + valueUpd + " WHERE Id=" + id
		return update
	}

	if id == "" {
		insert += "INSERT INTO " + table + " (Id," + keyIns + ") VALUES (null," + valueIns + ")"
		return insert
	}
	return ""
}

func queryToJson(query string, args ...interface{}) interface{} {
	db := dbConnect()
	defer db.Close()

	if query == "" {
		return nil
	}
	// an array of JSON objects
	// the map key is the field name
	var objects []map[string]interface{}

	rows, err := db.Query(query, args...)
	Log("", err, "0")

	defer rows.Close()

	for rows.Next() {
		// figure out what columns were returned
		// the column names will be the JSON object field keys
		columns, err := rows.ColumnTypes()
		Log("", err, "0")

		// Scan needs an array of pointers to the values it is setting
		// This creates the object and sets the values correctly
		values := make([]interface{}, len(columns))
		object := map[string]interface{}{}
		for i, column := range columns {
			if column.ScanType() != nil { //has data
				object[column.Name()] = reflect.New(column.ScanType()).Interface()
				values[i] = object[column.Name()]
			} else {
				var null *sql.NullString
				object[column.Name()] = ""
				values[i] = reflect.New(reflect.TypeOf(null).Elem()).Interface()
			}
		}

		err = rows.Scan(values...)
		Log("", err, "1")

		objects = append(objects, object)
	}

	// indent because I want to read the output
	return objects
}
