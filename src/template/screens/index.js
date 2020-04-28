const screens = {
  workshop1: {
  id: 'workshop1',
  name: '워크샵1',
  createdAt: '20200411',
  updatedAt: '20200511',
  description: 'workshop process 1',
  handleChange: ev => {
    console.log("new value", ev.target.value);
    console.log("new key, ", ev.target.getAttribute('tag'))
  },
  items: [
    {
      title: "Card 1",
      key: 'cmp 1 of tmp 1',
      details: {
        // ...more info
      },
      type: "D"
    },
    {
      title: "Card 2",
      key: 'cmp 2 of tmp 1',
      details: {
        // ...more info
      },
      type: "B"
    },
    {
      title: "Card 3",
      key: 'cmp 3 of temp 1',
      details: {
        // ...more info
      },
      type: "C"
    },
    {
      title: "Card 4",
      key: 'cpm 3 of temp 1',
      details: {
        // ...more info
      },
      type: "A"
    }
  ]
  },
  workshop2: {
    id: 'workshop2',
    name: '워크샵2',
    createdAt: '20200411',
    updatedAt: '20200511',
    description: 'workshop process 1',
    handleChange: ev => {
      console.log("new value", ev.target.value);
      console.log("new key, ", ev.target.getAttribute('tag'))
    },
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
        type: "A"
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
        type: "A"
      }
    ]
  },
  workshop3: {
    id: 'workshop3',
    name: '워크샵3',
    createdAt: '20200411',
    updatedAt: '20200511',
    description: 'workshop process 1',
    handleChange: ev => {
      console.log("new value", ev.target.value);
      console.log("new key, ", ev.target.getAttribute('tag'))
    },
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
        type: "C"
      }
    ]
  }
}

export default screens;