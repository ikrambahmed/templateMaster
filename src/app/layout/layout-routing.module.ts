import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { BudgetDeptComponent } from '../budget-dept/budget-dept.component';
import { ProjetComponent } from '../projet/projet.component';
import { BudgetProjComponent } from '../budget-proj/budget-proj.component';
import { MissionnaireComponent } from './missionnaire/missionnaire.component';
import { ListeMissionnaireComponent } from './liste-missionnaire/liste-missionnaire.component';
import { MissionComponent } from '../mission/mission.component';
import { ordMiss } from '../models/Ord_Miss';
import { OrdMissionnaireComponent } from './ord-missionnaire/ord-missionnaire.component';
import { FraisMissionComponent } from './frais-mission/frais-mission.component';
import { ValidationComponent } from './validation/validation.component';
import { ListeOrdreComponent } from './liste-ordre/liste-ordre.component';
import { AjoutBudgetDeptComponent } from './ajout-budget-dept/ajout-budget-dept.component';
import { AjoutBudgetProjetComponent } from './ajout-budget-projet/ajout-budget-projet.component';
import { OneMissionComponent } from './one-mission/one-mission.component';
import { AjoutMissionComponent } from './ajout-mission/ajout-mission.component';

const routes: Routes = [
    {
        path: '',
        component: LayoutComponent,
        children: [
            { path: '', redirectTo: 'dashboard', pathMatch: 'prefix' },
            { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
            { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
            { path: 'tables', loadChildren: './tables/tables.module#TablesModule' },
            { path: 'forms', loadChildren: './form/form.module#FormModule' },
            { path: 'bs-element', loadChildren: './bs-element/bs-element.module#BsElementModule' },
            { path: 'grid', loadChildren: './grid/grid.module#GridModule' },
            { path: 'components', loadChildren: './bs-component/bs-component.module#BsComponentModule' },
            { path: 'blank-page', loadChildren: './blank-page/blank-page.module#BlankPageModule' },
            {path:'budgetDept',component:BudgetDeptComponent} ,
            {path:'projet',component:ProjetComponent} , 
            {path:'missionnaire', component:MissionnaireComponent},
            {path:'listeMissionnaire', component:ListeMissionnaireComponent},
            {path:'mission', component:MissionComponent},
            {path:'listeOdreMission',component:ListeOrdreComponent} , 
            {path:'budgetProj',component:BudgetProjComponent} , 
            {path:'ord',component:OrdMissionnaireComponent},
            {path:'frais',component:FraisMissionComponent},
            {path:'validation',component:ValidationComponent},
            {path:'ajoutBudgetDept',component:AjoutBudgetDeptComponent},
            {path:'ajoutBudgetProjet',component:AjoutBudgetProjetComponent},
            {path:'oneMission',component:OneMissionComponent},
            {path:'ajoutMission',component:AjoutMissionComponent}
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class LayoutRoutingModule {}
