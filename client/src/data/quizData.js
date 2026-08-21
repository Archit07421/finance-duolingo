const quizData = {
    easy: [
      {
        question: "What does a stock represent?",
        options: [
          "A loan given to a bank",
          "A small ownership share in a company",
          "A government tax",
          "A type of insurance"
        ],
        answer: 1
      },
      {
        question: "What is saving?",
        options: [
          "Spending all your income",
          "Borrowing money",
          "Setting aside money for future use",
          "Buying only stocks"
        ],
        answer: 2
      },
      {
        question: "What is a budget?",
        options: [
          "A plan for managing income and expenses",
          "A type of stock",
          "A bank account",
          "A government investment"
        ],
        answer: 0
      },
      {
        question: "What does SIP commonly stand for in mutual funds?",
        options: [
          "Stock Investment Plan",
          "Systematic Investment Plan",
          "Savings Interest Program",
          "Secure Investment Portfolio"
        ],
        answer: 1
      },
      {
        question: "What is an emergency fund mainly used for?",
        options: [
          "Buying luxury items",
          "Unexpected financial expenses",
          "Buying cryptocurrency",
          "Paying entertainment bills"
        ],
        answer: 1
      },
      {
        question: "What is a mutual fund?",
        options: [
          "A pool of money invested in different securities",
          "A personal savings account",
          "A type of credit card",
          "A government tax"
        ],
        answer: 0
      },
      {
        question: "What does diversification mean?",
        options: [
          "Putting all money into one stock",
          "Avoiding all investments",
          "Spreading investments across different assets",
          "Only investing in cash"
        ],
        answer: 2
      },
      {
        question: "What is interest?",
        options: [
          "A fee or return associated with borrowed or invested money",
          "A type of stock",
          "A government ID",
          "A monthly salary"
        ],
        answer: 0
      },
      {
        question: "Which is generally considered a financial need?",
        options: [
          "Designer clothes",
          "Basic food",
          "Gaming accessories",
          "Luxury vacation"
        ],
        answer: 1
      },
      {
        question: "Why is starting an emergency fund useful?",
        options: [
          "It guarantees stock market profits",
          "It helps handle unexpected expenses",
          "It eliminates all taxes",
          "It guarantees a high salary"
        ],
        answer: 1
      }
    ],
  
    medium: [
      {
        question: "Why is diversification useful?",
        options: [
          "It guarantees profits",
          "It can reduce the impact of one investment performing poorly",
          "It eliminates investment risk",
          "It guarantees higher returns"
        ],
        answer: 1
      },
      {
        question: "What is compound interest?",
        options: [
          "Interest earned only on the original amount",
          "Interest calculated only once",
          "Interest earned on the principal and previously accumulated interest",
          "A government tax"
        ],
        answer: 2
      },
      {
        question: "What does an index fund generally try to do?",
        options: [
          "Guarantee market-beating returns",
          "Track a particular market index",
          "Avoid all market movements",
          "Invest only in one company"
        ],
        answer: 1
      },
      {
        question: "What is inflation?",
        options: [
          "A general increase in prices over time",
          "A decrease in salary",
          "A stock market exchange",
          "A type of mutual fund"
        ],
        answer: 0
      },
      {
        question: "What is asset allocation?",
        options: [
          "Choosing a bank account password",
          "Dividing investments among different asset classes",
          "Buying only stocks",
          "Avoiding investments"
        ],
        answer: 1
      },
      {
        question: "Which generally has higher short-term price volatility?",
        options: [
          "Individual stocks",
          "Cash kept at home",
          "A basic savings account",
          "A fixed salary"
        ],
        answer: 0
      },
      {
        question: "What is a bond?",
        options: [
          "An ownership share in a company",
          "A debt instrument where an investor lends money to an issuer",
          "A type of stock exchange",
          "A savings account"
        ],
        answer: 1
      },
      {
        question: "Why should an investor consider their time horizon?",
        options: [
          "It helps determine how much short-term fluctuation they may be able to tolerate",
          "It guarantees investment returns",
          "It removes all market risk",
          "It determines their salary"
        ],
        answer: 0
      },
      {
        question: "What is liquidity?",
        options: [
          "How quickly an asset can generally be converted into cash",
          "How profitable a company is",
          "How much tax an investor pays",
          "How old an investment is"
        ],
        answer: 0
      },
      {
        question: "What is risk tolerance?",
        options: [
          "The amount of money someone earns",
          "The level of investment uncertainty or loss someone is comfortable with",
          "The number of stocks someone owns",
          "The amount of tax someone pays"
        ],
        answer: 1
      }
    ],
  
    hard: [
      {
        question: "What is the main purpose of an expense ratio in a mutual fund?",
        options: [
          "To measure the fund's annual operating expenses relative to its assets",
          "To guarantee the fund's return",
          "To calculate an investor's salary",
          "To determine stock ownership"
        ],
        answer: 0
      },
      {
        question: "What does CAGR measure?",
        options: [
          "The average annualized growth rate over a period",
          "The daily stock price",
          "The total tax paid",
          "The number of shares owned"
        ],
        answer: 0
      },
      {
        question: "What is market capitalization?",
        options: [
          "A company's revenue divided by its employees",
          "The total market value of a company's outstanding shares",
          "The company's yearly tax",
          "The total amount of cash in a bank"
        ],
        answer: 1
      },
      {
        question: "What is the P/E ratio commonly used to compare?",
        options: [
          "A company's share price with its earnings per share",
          "A company's debt with its employees",
          "A bank's deposits with inflation",
          "A bond's maturity with its tax"
        ],
        answer: 0
      },
      {
        question: "What is a bear market?",
        options: [
          "A prolonged period of generally declining market prices",
          "A period when all stocks rise",
          "A period of zero inflation",
          "A guaranteed investment period"
        ],
        answer: 0
      },
      {
        question: "What is a bull market?",
        options: [
          "A prolonged period of generally rising market prices",
          "A market with no investors",
          "A period of guaranteed returns",
          "A market where only bonds are traded"
        ],
        answer: 0
      },
      {
        question: "What is the purpose of rebalancing a portfolio?",
        options: [
          "To restore the portfolio toward its intended asset allocation",
          "To guarantee higher returns",
          "To eliminate all risk",
          "To avoid paying taxes"
        ],
        answer: 0
      },
      {
        question: "What is the real return on an investment?",
        options: [
          "Return before considering inflation",
          "Return after accounting for the effect of inflation",
          "The investment's purchase price",
          "The amount invested initially"
        ],
        answer: 1
      },
      {
        question: "What is systematic risk?",
        options: [
          "Risk specific to one company",
          "Risk that affects the broader market or economy",
          "Risk caused only by poor budgeting",
          "Risk that can always be eliminated through diversification"
        ],
        answer: 1
      },
      {
        question: "Why can diversification not completely eliminate investment risk?",
        options: [
          "Some risks affect many assets or the entire market",
          "Diversification guarantees losses",
          "All investments always move identically",
          "Diversification only applies to bank accounts"
        ],
        answer: 0
      }
    ]
  };
  
  export default quizData;