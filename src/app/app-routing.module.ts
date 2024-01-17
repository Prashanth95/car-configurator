import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ModelColorComponent } from './components/model-color/model-color/model-color.component';
import { ConfigOptionsComponent } from './components/config-options/config-options/config-options.component';
import { TotalCostComponent } from './components/total-cost/total-cost/total-cost.component';

export const routes: Routes = [
    {
        path: 'model',
        component: ModelColorComponent
    },
    {
        path: 'config',
        component: ConfigOptionsComponent
    },
    {
        path: 'cost',
        component: TotalCostComponent
    },
    {
        path: '**',
        redirectTo: 'model'
    }
]


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }