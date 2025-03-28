import { Account } from '@/utils/types';

export const mockAccounts: Account[] = [
  {
    account_id: 'ACC001',
    holder: {
      firstName: 'Joe',
      lastName: 'Fanta',
      jointNames: '',
      username: 'sample1',
      password: 'sample1'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 100500.23
    },
    transaction_history: [
      {
        transaction_id: 'TXN001',
        dateTime: 'March 23rd 2024, 3:32:32 am',
        description: "Sinlair's Store - Trx",
        status: 'Success',
        amount_usd: 452.0,
        account_no: '****5009'
      },
      {
        transaction_id: 'TXN002',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'Justin Loci',
        status: 'Success',
        amount_usd: 1152.21,
        account_no: '****7676'
      },
      {
        transaction_id: 'TXN003',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'Transfer',
        status: 'Success',
        amount_usd: -100.0,
        account_no: '****4409'
      },
      {
        transaction_id: 'TXN004',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'Payment',
        status: 'Success',
        amount_usd: -50.0,
        account_no: '****5093'
      },
      {
        transaction_id: 'TXN005',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'Online Purchase',
        status: 'Success',
        amount_usd: -75.0,
        account_no: '****2334'
      },
      {
        transaction_id: 'TXN006',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'ATM Withdrawal',
        status: 'Success',
        amount_usd: -150.0,
        account_no: '****3213'
      },
      {
        transaction_id: 'TXN007',
        dateTime: 'March 20th 2024, 2:02:22 am',
        description: 'Transfer',
        status: 'Pending',
        amount_usd: 200.0,
        account_no: '****4434'
      }
    ]
  },
  {
    account_id: 'ACC002',
    createdAt: '2/24/2025',
    holder: {
      firstName: 'Scott',
      lastName: 'H. Allen',
      jointNames: '',
      username: 'ScottHumpal$',
      password: 'Adoracion@101'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1578800600.78
    },
    transaction_history: [
      {
        dateTime: 'January 13, 2024, 3:32:32 am',
        description: 'TURKISH AIRLINE PAYMENT',
        status: 'Success',
        amount_usd: -2300.0,
        account_no: '****7241'
      },
      {
        dateTime: 'January 8, 2024, 1:15:10 pm',
        description: 'TRANSFER FROM LAMCO MORTGAGE',
        status: 'Success',
        amount_usd: 182000.0,
        account_no: '****5832'
      },
      {
        dateTime: 'December 8, 2023, 10:05:45 am',
        description: 'RENT PAYMENT',
        status: 'Success',
        amount_usd: -1500.0,
        account_no: '****9476'
      },
      {
        dateTime: 'November 25, 2023, 4:20:15 pm',
        description: 'TRANSFER FROM NEBULA CORP',
        status: 'Success',
        amount_usd: 110000.0,
        account_no: '****1238'
      },
      {
        dateTime: 'October 10, 2023, 9:45:30 am',
        description: 'INVOICE PAYMENT TO STARLINK SOLUTIONS',
        status: 'Success',
        amount_usd: -3500.0,
        account_no: '****8754'
      },
      {
        dateTime: 'September 5, 2023, 7:00:00 pm',
        description: 'TRANSFER FROM ORBITAL INC.',
        status: 'Success',
        amount_usd: 97000.0,
        account_no: '****4562'
      },
      {
        dateTime: 'August 14, 2023, 11:10:20 am',
        description: 'PAYMENT TO GLOBE TECH',
        status: 'Success',
        amount_usd: -1200.0,
        account_no: '****6789'
      },
      {
        dateTime: 'July 20, 2023, 2:30:50 pm',
        description: 'TRANSFER FROM ECHO ENTERPRISES',
        status: 'Success',
        amount_usd: 48000.0,
        account_no: '****8124'
      },
      {
        dateTime: 'June 10, 2023, 8:15:05 am',
        description: "GRIMMS SUPPLY HOLDINGS'S",
        status: 'Success',
        amount_usd: 58000.0,
        account_no: '****3941'
      },
      {
        dateTime: 'May 15, 2023, 5:45:25 pm',
        description: 'TRANSFER FROM TABITHA MARTEL',
        status: 'Success',
        amount_usd: 250000.0,
        account_no: '****2765'
      },
      {
        dateTime: 'April 8, 2023, 12:00:00 pm',
        description: 'TRANSFER FROM NICHOLA DUKE',
        status: 'Success',
        amount_usd: 650000.0,
        account_no: '****9821'
      },
      {
        dateTime: 'March 2, 2023, 3:10:10 pm',
        description: 'TRANSFER FROM BRANDON PERKINS',
        status: 'Success',
        amount_usd: 175000.0,
        account_no: '****6513'
      },
      {
        dateTime: 'February 23, 2023, 9:25:40 am',
        description: "SINLAIR'S STORE - TRX",
        status: 'Success',
        amount_usd: -650.0,
        account_no: '****4672'
      },
      {
        dateTime: 'February 2, 2023, 6:40:00 pm',
        description: 'PROJECT MILESTONE PAYMENT',
        status: 'Success',
        amount_usd: 65000.0,
        account_no: '****7314'
      },
      {
        dateTime: 'January 25, 2023, 8:55:15 am',
        description: 'UTILITY BILL PAYMENT',
        status: 'Success',
        amount_usd: -300.0,
        account_no: '****5289'
      },
      {
        dateTime: 'January 15, 2023, 10:20:50 am',
        description: 'TRANSFER FROM APEX DYNAMICS CO.',
        status: 'Success',
        amount_usd: 125000.0,
        account_no: '****8742'
      },
      {
        dateTime: 'January 10, 2023, 11:05:30 am',
        description: 'TRANSFER FROM ZEBRA TECH.',
        status: 'Success',
        amount_usd: 325000.0,
        account_no: '****1953'
      }
    ]
  },
  {
    account_id: 'ACC003',
    createdAt: '3/7/2025',
    holder: {
      firstName: 'Belinda Bailey Melendez',
      lastName: '',
      jointNames: '',
      username: 'bestinall00',
      password: 'Gravity12345'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 499850.0
    },
    transaction_history: [
      {
        dateTime: 'March 3, 2025, 2:02:18 pm',
        description: 'Withdrawal XXXXXX1568',
        status: 'Success',
        amount_usd: 50.0
      },
      {
        dateTime: 'March 3, 2025, 1:22:13 pm',
        description: 'Withdrawal XXXXXX3478',
        status: 'Success',
        amount_usd: 100.0
      },
      {
        dateTime: 'March 2, 2025, 9:10:10 am',
        description: 'Deposit XXXXXX8764',
        status: 'Success',
        amount_usd: 500000.0
      },
      {
        dateTime: 'February 27, 2025, 10:32:32 am',
        description: 'Deposit XXXXXX8764',
        status: 'Pending',
        amount_usd: 500000.0
      },
      {
        dateTime: 'February 26, 2025, 8:50:12 am',
        description: 'Deposit XXXXXX8764',
        status: 'Success',
        amount_usd: 50.0
      }
    ]
  },
  {
    account_id: 'ACC004',
    createdAt: '3/10/2025',
    holder: {
      firstName: 'Daniel McGovern',
      lastName: '',
      jointNames: '',
      username: 'danielmc50',
      password: 'LivGovern2025'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 400000.0
    },
    transaction_history: [
      {
        dateTime: 'March 8, 2025, 9:02:18 am',
        description: 'Transfer from  XXXXXX1568',
        status: 'Success',
        amount_usd: 400000.0
      }
    ]
  },
  {
    account_id: 'ACC005',
    createdAt: '3/26/2025',
    holder: {
      firstName: 'Tom hanks & Harriette Schutsch',
      lastName: '',
      jointNames: '',
      username: 'Harriette_hanks',
      password: 'Wealth2025'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 2700000000.0
    },
    transaction_history: [
      {
        dateTime: 'March 26, 2025',
        description: 'Coinmarket cap llc investment pay out XXXXXX1568',
        status: 'Success',
        amount_usd: 2100000000.0
      },
      {
        dateTime: 'March 26, 2025',
        description: 'Coinmarket cap llc investment pay out XXXXXX3637',
        status: 'Success',
        amount_usd: 600000000.0
      }
    ]
  },
  {
    account_id: 'ACC006',
    createdAt: '3/28/2025',
    holder: {
      firstName: "Ramirez Schmidt Andrew's",
      lastName: '',
      jointNames: '',
      username: 'Ramirez17#',
      password: 'Ramirez17@'
    },
    bank_details: {
      account_type: 'Checking',
      balance_usd: 1400000.0
    },
    transaction_history: [
      {
        dateTime: 'March 26, 2025',
        description: 'Coinmarket cap llc investment pay out XXXXXX3638',
        status: 'Success',
        amount_usd: 1400000.0
      },
      {
        dateTime: 'March 25, 2025',
        description: 'Debit from phone purchase XXXXXX1568',
        status: 'Success',
        amount_usd: -750.0
      },
      {
        dateTime: 'March 25, 2025',
        description: 'Debit from phone purchase XXXXXX3637',
        status: 'Success',
        amount_usd: -350.0
      }
    ]
  }
];
