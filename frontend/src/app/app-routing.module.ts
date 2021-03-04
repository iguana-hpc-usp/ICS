import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ExercisesComponent} from "./exercises/exercises.component";
import {ExercisesEditComponent} from "./exercises/exercises-edit/exercises-edit.component";
import {ExercisesGroupsComponent} from "./exercises/exercises-groups/exercises-groups.component";
import {ExercisesAnswerComponent} from "./exercises/exercises-answer/exercises-answer.component";
import {ExercisesAnswerEditComponent} from "./exercises/exercises-answer/exercises-answer-edit/exercises-answer-edit.component";
import {GroupsComponent} from "./groups/groups.component";
import {GroupsEditComponent} from "./groups/groups-edit/groups-edit.component";
import {GroupsMembersComponent} from "./groups/groups-members/groups-members.component";
import {SettingsComponent} from "./settings/settings.component";
import {TryCodeComponent} from "./try-code/try-code.component";
import {UsersComponent} from "./users/users.component";
import {UsersEditComponent} from "./users/users-edit/users-edit.component";
import {WelcomeComponent} from "./welcome/welcome.component";
import {HostLoginComponent} from "./host-credentials/host-login/host-login.component";

const routes: Routes = [
  { path: 'welcome',        component: WelcomeComponent,              },
  { path: '',               component: WelcomeComponent,              },
  { path: '404',            component: WelcomeComponent,              },
  { path: 'view-code',      component: TryCodeComponent,              },
  { path: 'settings',       component: SettingsComponent,             },
  { path: 'edit-user',      component: UsersEditComponent             },
  { path: 'add-user',       component: UsersEditComponent             },
  { path: 'view-user',      component: UsersComponent,                },
  { path: 'edit-group',     component: GroupsEditComponent            },
  { path: 'add-group',      component: GroupsEditComponent            },
  { path: 'add-members',    component: GroupsMembersComponent,        },
  { path: 'add-groupex',    component: ExercisesGroupsComponent,      },
  { path: 'view-group',     component: GroupsComponent,               },
  { path: 'view-exercise',  component: ExercisesComponent,            },
  { path: 'edit-exercise',  component: ExercisesEditComponent         },
  { path: 'add-exercise',   component: ExercisesEditComponent         },
  { path: 'view-answer',    component: ExercisesAnswerComponent,      },
  { path: 'add-answer',     component: ExercisesAnswerEditComponent,  },
  { path: 'edit-answer',    component: ExercisesAnswerEditComponent,  },
  { path: 'host-login',     component: HostLoginComponent,            },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
