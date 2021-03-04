#!/bin/sh
#This is a installation script to Auto-Self Cluster Configuration
#Doctoral Project
#
#
NAME=iguana-hpc-usp
GIT=ICS
DIR=/usr/local
SRC=$DIR/src
BIN=$DIR/bin
ETC=$DIR/etc/$NAME
NFS=/$NAME
SERVICE=/var/lib/systemd/system
RUN=/run/$NAME
INIT=/etc/init.d
STATIC=/usr/local/share/$NAME

echo "\nProgram name: $NAME"
echo "Instalation dir: $DIR"
echo "NFS dir: $NFS"
echo "Configuration dir: $ETC\n"

func_packages() {
  LIST_OF_APPS="git golang-go golang docker-compose docker.io nfs-kernel-server nfs-common clang-tidy"
  apt update

  for p in $LIST_OF_APPS
  do
    if [ $(dpkg-query -W -f='${Status}' $p 2>/dev/null | grep -c "ok installed") -eq 0 ];
    then
      apt-get install -y $p;
    fi
  done
}

func_mkdirs() {
  LIST_OF_DIRS="$NFS $ETC $SERVICE $RUN $STATIC"

  for d in $LIST_OF_DIRS
  do
    if [ -d "$d" ]; then
        echo "$d find!"
    else
        mkdir $d
        echo "Creating $d directory"
    fi
  done
}

func_clone() {
  if [ -d "$SRC/$GIT" ]; then
    cd "$SRC/$GIT"
    echo "start git pull!"
    git pull
  else
    echo "start git clone!"
    cd $SRC
    git clone https://github.com/$NAME/$GIT
  fi
}

func_build() {
  export GOPATH=$SRC/$GIT/
  #rm -fr $SRC/$NAME/src
  cd $SRC/$GIT/backend
  go get -d
  rm -fr ../src/github.com/docker/docker/vendor/github.com/docker/go-connections/
  go get -d
  go build -o $NAME *.go
  cp $NAME $BIN/
  chmod u+x $BIN/$NAME
  cp ../config/config.yaml $ETC/
}

func_containers() {
  cd $SRC/$GIT/containers
  docker-compose build
}

func_frontend() {
  cd $SRC/$GIT/frontend
  cp -fr dist/frontend/* $STATIC/
}

func_clusterService() {
  cd $SRC/$GIT
  cp $NAME.service $SERVICE/
  chmod u+x $NAME
  cp $NAME $INIT/
  systemctl daemon-reload
  systemctl enable $NAME
}

###### MAIN ######################
/etc/init.d/$NAME stop

dhclient

func_packages
func_mkdirs
func_clone
func_build
func_containers
func_frontend
func_clusterService

/etc/init.d/$NAME start
/etc/init.d/$NAME status

exit
