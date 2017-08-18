import { Routes } from '@angular/router';
// import { ComponentDialogComponent } from './pages/component-dialog/component-dialog.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
// import { ComponentButtonsComponent } from './pages/component-buttons/component-buttons.component';
// import { ComponentProgressComponent } from './pages/component-progress/component-progress.component';
// import { ChartsChartjsComponent } from './pages/charts-chartjs/charts-chartjs.component';
// import { TablesDynamicComponent } from './pages/tables-dynamic/tables-dynamic.component';
// import { TablesBasicComponent } from './pages/tables-basic/tables-basic.component';
// import { FormsTreeComponent } from './pages/forms-tree/forms-tree.component';
// import { ComponentCardComponent } from './pages/component-card/component-card.component';
// import { ComponentBootstrapComponent } from './pages/component-bootstrap/component-bootstrap.component';
// import { ComponentNotificationsComponent } from './pages/component-notifications/component-notifications.component';
// import { ComponentRadioButtonComponent } from './pages/component-radio-button/component-radio-button.component';
// import { ComponentCheckboxComponent } from './pages/component-checkbox/component-checkbox.component';
// import { ComponentChipsComponent } from './pages/component-chips/component-chips.component';
// import { ComponentDatePickerComponent } from './pages/component-date-picker/component-date-picker.component';
// import { ComponentListComponent } from './pages/component-list/component-list.component';
// import { ComponentMediaPlayerComponent } from './pages/component-media-player/component-media-player.component';
// import { ComponentMenuComponent } from './pages/component-menu/component-menu.component';
// import { ComponentGridListComponent } from './pages/component-grid-list/component-grid-list.component';
// import { ComponentSelectComponent } from './pages/component-select/component-select.component';
// import { ComponentSlideToggleComponent } from './pages/component-slide-toggle/component-slide-toggle.component';
// import { ComponentSliderComponent } from './pages/component-slider/component-slider.component';
// import { ComponentTabsComponent } from './pages/component-tabs/component-tabs.component';
// import { ComponentTextEditorComponent } from './pages/component-text-editor/component-text-editor.component';
// import { ComponentToolbarComponent } from './pages/component-toolbar/component-toolbar.component';
// import { ComponentTooltipComponent } from './pages/component-tooltip/component-tooltip.component';
// import { IconMaterialComponent } from './pages/icon-material/icon-material.component';
// import { IconWeatherComponent } from './pages/icon-weather/icon-weather.component';
// import { MapsGoogleComponent } from './pages/maps-google/maps-google.component';
// import { IconFontawesomeComponent } from './pages/icon-fontawesome/icon-fontawesome.component';
// import { FormsValidationComponent } from './pages/forms-validation/forms-validation.component';
// import { FormsWizardComponent } from './pages/forms-wizard/forms-wizard.component';
// import { FormsAutocompleteComponent } from './pages/forms-autocomplete/forms-autocomplete.component';
// import { FormsUploadComponent } from './pages/forms-upload/forms-upload.component';
// import { ChartsPeityComponent } from './pages/charts-peity/charts-peity.component';
// import { WidgetsComponent } from './pages/widgets/widgets.component';
// import { LayoutFlexComponent } from './pages/layout-flex/layout-flex.component';
// import { LayoutTabsComponent } from './pages/layout-tabs/layout-tabs.component';
// import { LayoutEdgesComponent } from './pages/layout-edges/layout-edges.component';
// import { LayoutCardsComponent } from './pages/layout-cards/layout-cards.component';
// import { LayoutFullscreenComponent } from './pages/layout-fullscreen/layout-fullscreen.component';
// import { PagesErrorComponent } from './pages/pages-error/pages-error.component';
// import { PagesLockscreenComponent } from './pages/pages-lockscreen/pages-lockscreen.component';
// import { PagesInvoiceComponent } from './pages/pages-invoice/pages-invoice.component';
// import { PagesNotfoundComponent } from './pages/pages-notfound/pages-notfound.component';
// import { PagesSigninComponent } from './pages/pages-signin/pages-signin.component';
// import { PagesSignupComponent } from './pages/pages-signup/pages-signup.component';
// import { AppsCalendarComponent } from './pages/apps-calendar/apps-calendar.component';
// import { AppsExplorerComponent } from './pages/apps-explorer/apps-explorer.component';
// import { AppsMailComponent } from './pages/apps-mail/apps-mail.component';
// import { HighchartsDemoComponent } from './pages/highcharts-demo/highcharts-demo.component';
// import { ReportDashboardComponent } from './pages/report-dashboard/report-dashboard.component';
// import { TransactionAssignmentRulesComponent } from './pages/transaction-assignment-rules/transaction-assignment-rules.component';
// import { CurrencySpotRateComponent } from './pages/currency-spot-rate/currency-spot-rate.component';
// import { BalanceReportingComponent } from './pages/balance-reporting/balance-reporting.component';
// import { CustomReportsComponent } from './pages/custom-reports/custom-reports.component';
// import { MyReportsComponent } from './pages/my-reports/my-reports.component';
// import { JobStatusComponent } from './pages/job-status/job-status.component';
// import { ImportSettingsComponent } from './pages/import-settings/import-settings.component';
// import { ImportExportFilesComponent } from './pages/import-export-files/import-export-files.component';
// import { WorksheetsComponent } from './pages/worksheets/worksheets.component';
// import { BankStatementsComponent } from './pages/bank-statements/bank-statements.component';
// import { PredefinedReportsComponent } from './pages/predefined-reports/predefined-reports.component';
// import { BankBalancesComponent } from './pages/bank-balances/bank-balances.component';
// import { BankStatementsWorksheetComponent } from './pages/bank-statements-worksheet/bank-statements-worksheet.component';
// import { FailedJobsComponent } from './pages/failed-jobs/failed-jobs.component';
// import { KendoDetailRowExampleComponent } from './shared/kendo-detail-row-example/kendo-detail-row-example.component';
// import { ProcessedJobsComponent } from './shared/processed-jobs/processed-jobs.component';
// import { CompletedJobsComponent } from './pages/completed-jobs/completed-jobs.component';

/**
 * Router Setting
 *
 * Write your component (Page) here to load.
 */
export const ROUTES: Routes = [
  // This default is router like '/'.
  {
    path: '',
    redirectTo: '/dashboard',
    pathMatch: 'full'
  },
  // Emergency loading, need to import component form file.
  {
    path: 'dashboard',
    component: DashboardComponent
  }
  //,
  // Lazy loading, you need to create a module file.
  //
  // 1. Find file dashboard.module.lazy at folder dashboard
  // 2. Rename file dashboard.module.lazy to dashboard.module.ts
  // 3. Modify this file
  //    change Line "component: DashboardComponent" to "loadChildren: './dashboard/dashboard.module#DashboardModule'"
  // 4. Modify file app.module.ts
  //    remove line "DashboardComponent," and "import { DashboardComponent } from './pages/dashboard/dashboard.component';"
  //
  // {
  //   path: 'dashboard',
  //   loadChildren: './dashboard/dashboard.module#DashboardModule'
  // },
//   {
//     path: 'component-buttons',
//     component: ComponentButtonsComponent
//   },
//   {
//     path: 'component-progress',
//     component: ComponentProgressComponent
//   },
//   {
//     path: 'component-card',
//     component: ComponentCardComponent
//   },
//   {
//     path: 'component-bootstrap',
//     component: ComponentBootstrapComponent
//   },
//   {
//     path: 'component-dialog',
//     component: ComponentDialogComponent
//   },
//   {
//     path: 'component-notifications',
//     component: ComponentNotificationsComponent
//   },
//   {
//     path: 'radio-button',
//     component: ComponentRadioButtonComponent
//   },
//   {
//     path: 'component-checkbox',
//     component: ComponentCheckboxComponent
//   },
//   {
//     path: 'component-chips',
//     component: ComponentChipsComponent
//   },
//   {
//     path: 'component-date-picker',
//     component: ComponentDatePickerComponent
//   },
//   {
//     path: 'component-list',
//     component: ComponentListComponent
//   },
//   {
//     path: 'component-media-player',
//     component: ComponentMediaPlayerComponent
//   },
//   {
//     path: 'component-menu',
//     component: ComponentMenuComponent
//   },
//   {
//     path: 'component-grid-list',
//     component: ComponentGridListComponent
//   },
//   {
//     path: 'component-select',
//     component: ComponentSelectComponent
//   },
//   {
//     path: 'component-slide-toggle',
//     component: ComponentSlideToggleComponent
//   },
//   {
//     path: 'component-slider',
//     component: ComponentSliderComponent
//   },
//   {
//     path: 'component-tabs',
//     component: ComponentTabsComponent
//   },
//   {
//     path: 'component-text-editor',
//     component: ComponentTextEditorComponent
//   },
//   {
//     path: 'component-toolbar',
//     component: ComponentToolbarComponent
//   },
//   {
//     path: 'component-tooltip',
//     component: ComponentTooltipComponent
//   },
//   {
//     path: 'component-radio-button',
//     component: ComponentRadioButtonComponent
//   },
//   {
//     path: 'icon-material',
//     component: IconMaterialComponent
//   },
//   {
//     path: 'icon-weather',
//     component: IconWeatherComponent
//   },
//   {
//     path: 'icon-fontawesome',
//     component: IconFontawesomeComponent
//   },
//   {
//     path: 'maps-google',
//     component: MapsGoogleComponent
//   },
//   {
//     path: 'forms-validation',
//     component: FormsValidationComponent
//   },
//   {
//     path: 'forms-wizard',
//     component: FormsWizardComponent
//   },
//   {
//     path: 'forms-autocomplete',
//     component: FormsAutocompleteComponent
//   },
//   {
//     path: 'forms-upload',
//     component: FormsUploadComponent
//   },
//   {
//     path: 'forms-tree',
//     component: FormsTreeComponent
//   },
//   {
//     path: 'tables-basic',
//     component: TablesBasicComponent
//   },
//   {
//     path: 'tables-dynamic',
//     component: TablesDynamicComponent
//   },
//   {
//     path: 'charts-chartjs',
//     component: ChartsChartjsComponent
//   },
//   {
//     path: 'charts-peity',
//     component: ChartsPeityComponent
//   },
//   {
//     path: 'widgets',
//     component: WidgetsComponent
//   },
//   {
//     path: 'layout-flex',
//     component: LayoutFlexComponent
//   },
//   {
//     path: 'layout-tabs',
//     component: LayoutTabsComponent
//   },
//   {
//     path: 'layout-edges',
//     component: LayoutEdgesComponent
//   },
//   {
//     path: 'layout-cards',
//     component: LayoutCardsComponent
//   },
//   {
//     path: 'layout-fullscreen',
//     component: LayoutFullscreenComponent
//   },
//   {
//     path: 'pages-error',
//     component: PagesErrorComponent
//   },
//   {
//     path: 'pages-lockscreen',
//     component: PagesLockscreenComponent
//   },
//   {
//     path: 'pages-invoice',
//     component: PagesInvoiceComponent
//   },
//   {
//     path: 'pages-notfound',
//     component: PagesNotfoundComponent
//   },
//   {
//     path: 'pages-signin',
//     component: PagesSigninComponent
//   },
//   {
//     path: 'pages-signup',
//     component: PagesSignupComponent
//   },
//   {
//     path: 'apps-calendar',
//     component: AppsCalendarComponent
//   },
//   {
//     path: 'apps-explorer',
//     component: AppsExplorerComponent
//   },
//   {
//     path: 'apps-mail',
//     component: AppsMailComponent
//   },
//   {
//     path: 'predefined-reports',
//     component: PredefinedReportsComponent
//   },
//   {
//     path: 'report-dashboard',
//     component: ReportDashboardComponent
//   },
//   {
//     path: 'currency-spot-rate',
//     component: CurrencySpotRateComponent
//   },
//   {
//     path: 'transaction-assignment-rules',
//     component: TransactionAssignmentRulesComponent
//   },
//   {
//     path: 'balance-reporting',
//     component: BalanceReportingComponent
//   },
//   {
//     path: 'custom-reports',
//     component: CustomReportsComponent
//   },
//   {
//     path: 'my-reports',
//     component: MyReportsComponent
//   },
//   {
//     path: 'job-status',
//     component: JobStatusComponent
//   },
//   {
//     path: 'import-settings',
//     component: ImportSettingsComponent
//   },
//   {
//     path: 'import-export-files',
//     component: ImportExportFilesComponent
//   },
//   {
//     path: 'worksheets',
//     component: WorksheetsComponent
//   },
//   {
//     path: 'bank-statements',
//     component: BankStatementsComponent
//   },
//   {
//     path: 'predefined-reports',
//     component: PredefinedReportsComponent
//   },
//   {
//     path: 'bank-balances',
//     component: BankBalancesComponent
//   },
//   {
//     path: 'bank-statements-worksheet',
//     component: BankStatementsWorksheetComponent
//   },
//   {
//     path: 'failed-jobs',
//     component: FailedJobsComponent
//   },
//   {
//     path: 'kendo-detail-row-example',
//     component: KendoDetailRowExampleComponent
//   },
//   {
//     path: 'completed-jobs',
//     component: CompletedJobsComponent
//   },
//   {
//     path: 'processed-jobs',
//     component: ProcessedJobsComponent
// }    
];
