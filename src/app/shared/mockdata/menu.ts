/**
 * Menu data
 */
export class MenuMock {
  static root = [
    {
      name: 'dashboard',
      title: 'Workspace',
      faIcon: 'fa-tachometer',
      link: '/dashboard'
    },
    {
      name: 'reporting',
      title: 'Workspace',
      faIcon: 'fa fa-desktop',
      sub: [
        {
          name: 'predefined-reports',
          title: 'Dashboards',
          link: '/predefined-reports'
        },
        {
          name: 'report-dashboard',
          title: 'Reports',
          link: '/report-dashboard'
        },
        {
          name: 'custom-reports',
          title: 'Jobs',
          link: '/custom-reports'
        }
      ]
    },
    {
      name: 'cash-management',
      title: 'Cash Management',
      faIcon: 'fa fa-money',
      sub: [
        {
          name: 'bank-statements',
          title: 'Worksheets',
          link: '/bank-statements'
        },
        {
          name: 'import-settings',
          title: 'Reconciliation',
          link: '/import-settings'
        },
        {
          name: 'bank-statements',
          title: 'Forecasting',
          link: '/bank-statements'
        },
        {
          name: 'import-settings',
          title: 'Search',
          link: '/import-settings'
        },
        {
          name: 'import-settings',
          title: 'Setup',
          link: '/import-settings'
        }        
      ]
    },


    {
      name: 'financial-instruments',
      title: 'Financial Instruments',
      faIcon: 'fa fa-handshake-o',
      sub: [
        {
          name: 'worksheets',
          title: 'Create',
          link: '/worksheets'
        },
        {
          name: 'bank-statements-worksheet',
          title: 'Search',
          link: '/bank-statements-worksheet'
        },
        {
          name: 'bank-balances',
          title: 'Setup',
          link: '/bank-balances'
        }
      ]
    },

    {
      name: 'funds-transfers',
      title: 'Funds Transfers',
      faIcon: 'fa fa-exchange',
      sub: [
        {
          name: 'worksheets',
          title: 'Create',
          link: '/worksheets'
        },
        {
          name: 'bank-statements-worksheet',
          title: 'Search',
          link: '/bank-statements-worksheet'
        },
        {
          name: 'bank-balances',
          title: 'Setup',
          link: '/bank-balances'
        }
      ]
    },


    {
      name: 'accounting',
      title: 'Accounting',
      faIcon: 'fa fa-calculator',
      sub: [
        {
          name: 'worksheets',
          title: 'Create',
          link: '/worksheets'
        },
        {
          name: 'bank-statements-worksheet',
          title: 'Search',
          link: '/bank-statements-worksheet'
        },
        {
          name: 'bank-balances',
          title: 'Setup',
          link: '/bank-balances'
        }
      ]
    },



    {
      name: 'banking',
      title: 'Banking',
      faIcon: 'fa fa-university',
      sub: [
        {
          name: 'worksheets',
          title: 'Account Analysis',
          link: '/worksheets'
        },
        {
          name: 'bank-statements-worksheet',
          title: 'eBam',
          link: '/bank-statements-worksheet'
        },
        {
          name: 'bank-balances',
          title: 'eStatements',
          link: '/bank-balances'
        }
      ]
    },




    {
      name: 'setup',
      title: 'Setup',
      faIcon: 'fa fa-cog',
      sub: [
        {
          name: 'Banks',
          title: 'Worksheets',
          link: '/worksheets'
        },
        {
          name: 'bank-statements-worksheet',
          title: 'Accounts',
          link: '/bank-statements-worksheet'
        },
        {
          name: 'bank-balances',
          title: 'User Codes',
          link: '/bank-balances'
        },
        {
          name: 'balance-reporting',
          title: 'Jobs',
          link: '/balance-reporting'
        },
        {
          name: 'currency-spot-rate',
          title: 'Calendars',
          link: '/currency-spot-rate'
        },
        {
          name: 'transaction-assignment-rules',
          title: 'Currency',
          link: '/transaction-assignment-rules'
        },
        {
          name: 'bank-balances',
          title: 'Interest',
          link: '/bank-balances'
        },
        {
          name: 'balance-reporting',
          title: 'eNotifications',
          link: '/balance-reporting'
        },
        {
          name: 'currency-spot-rate',
          title: 'Documentation',
          link: '/currency-spot-rate'
        },
        {
          name: 'transaction-assignment-rules',
          title: 'General',
          link: '/transaction-assignment-rules'
        },
        {
          name: 'balance-reporting',
          title: 'Security',
          link: '/balance-reporting'
        },
        {
          name: 'currency-spot-rate',
          title: 'Create',
          link: '/currency-spot-rate'
        },
        {
          name: 'transaction-assignment-rules',
          title: 'General',
          link: '/transaction-assignment-rules'
        }
      ]
    },



    {
      name: 'security',
      title: 'Security',
      faIcon: 'fa fa-shield',
      sub: [
        {
          name: 'worksheets',
          title: 'Worksheets',
          link: '/worksheets'
        },
        {
          name: 'bank-statements-worksheet',
          title: 'Bank Statements Worksheet',
          link: '/bank-statements-worksheet'
        },
        {
          name: 'bank-balances',
          title: 'Bank Balances',
          link: '/bank-balances'
        },
        {
          name: 'balance-reporting',
          title: 'Balance Reporting',
          link: '/balance-reporting'
        },
        {
          name: 'currency-spot-rate',
          title: 'Currency Spot Rates',
          link: '/currency-spot-rate'
        },
        {
          name: 'transaction-assignment-rules',
          title: 'Transaction Assignment Rules',
          link: '/transaction-assignment-rules'
        }
      ]
    },

  ];
}
