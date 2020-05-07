import handleChangeFunc from '../../utils/onChangeHelper';

const screens = {
  workshop1: {
  id: 'workshop1',
  name: '워크샵1',
  createdAt: '20200411',
  updatedAt: '20200511',
  description: '기업 인사 조직 워크샵 단계 (1 of 15) templates',
  handleChange: handleChangeFunc,
  items: [
    {
      title: "Card 1",
      key: 'cmp 1 of tmp 1',
      details: {
        // ...more info
      },
      type: "D",
      userDefined: {
        text: 'Question : What is your favorite fruit???',
        options: ['apple', 'banana', 'kiwi', 'all']
      }
    },
    {
      title: "Card 2",
      key: 'cmp 2 of tmp 1',
      details: {
        // ...more info
      },
      type: "B",
      userDefined: {
        text: 'Question : Is the Earch flat???'
      }
    },
    {
      title: "Card 3",
      key: 'cmp 3 of temp 1',
      details: {
        // ...more info
      },
      type: "C",
      userDefined: {
        text: 'Question : Do you believe in Evolution ??',
        options: ['Yes, Absolutely', 'No, just a lie']
      }
    },
    {
      title: "Card 4",
      key: 'cpm 3 of temp 1',
      details: {
        // ...more info
      },
      type: "A",
      userDefined: {
        text: 'Question  : Is the Earch rolling ???'
      }
    }
  ]
  },
  workshop2: {
    id: 'workshop2',
    name: '워크샵2',
    createdAt: '20200411',
    updatedAt: '20200511',
    description: 'workshop process 2',
    handleChange: handleChangeFunc,
    items: [
      {
        title: "Card 1",
        key: 'cpm 1 of temp 2',
        details: {
          // ...more info
        },
        type: "A"
      },
      {
        title: "Card 2",
        key: 'cpm 2 of temp 2',
        details: {
          // ...more info
        },
        type: "B",
        userDefined: {
          text: 'Question : Does the Universe expand itself ???'
        }
      },
      {
        title: "Card 3",
        key: 'cpm 3 of temp 2',
        details: {
          // ...more info
        },
        type: "A"
      },
      {
        title: "Card 4",
        key: 'cpm 4 of temp 2',
        details: {
          // ...more info
        },
        type: "A",
        userDefined: {
          text: 'Question  : What is your life treasure  ???'
        }
      }
    ]
  },
  workshop3: {
    id: 'workshop3',
    name: '워크샵3',
    createdAt: '20200411',
    updatedAt: '20200511',
    description: 'workshop process 3',
    handleChange: handleChangeFunc,
    items: [
      {
        title: "Card 1",
        key: 'cpm 1 of temp 3',
        details: {
          // ...more info
        },
        type: "A"
      },
      {
        title: "Card 2",
        key: 'cpm 2 of temp 3',
        details: {
          // ...more info
        },
        type: "A"
      },
      {
        title: "Card 3",
        key: 'cpm 3 of temp 3',
        details: {
          // ...more info
        },
        type: "C"
      },
      {
        title: "Card 4",
        key: 'cpm 4 of temp 3',
        details: {
          // ...more info
        },
        type: "D",
        userDefined: {
          text: 'Question : What is your favorite song',
          options: ['Yellow', 'The great gig in the sky', 'Hello', 'all']
        }
      }
    ]
  }
}

export default screens;