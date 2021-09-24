export interface UserData {
  userName: string;
  tasks: Task[];
}

export interface Task {
  title: string;
  description: string;
  person: string;
  priority: string;
  id: number;
}

export const userMockedData: UserData[] = [
  {
    userName: 'user1',
    tasks: [
      {
        title: 'انجام تسک ۱',
        description: ' لورم ایپسوم با ایجاد طرح ساختگی و متون فارسی برای طراحان و لورم ایپسوم با ایجاد',
        id: 1,
        person: 'عباس قربانی',
        priority: 'High'
      },
      {
        title: 'انجام تسک ۲',
        description: ' لورم ایپسوم با ایجاد طرح ساختگی و متون فارسی برای طراحان و لورم ایپسوم با ایجاد',
        id: 2,
        person: 'عباس قربانی',
        priority: 'Medium'
      },
      {
        title: 'انجام تسک ۳',
        description: ' لورم ایپسوم با ایجاد طرح ساختگی و متون فارسی برای طراحان و لورم ایپسوم با ایجاد',
        id: 3,
        person: 'عباس قربانی',
        priority: 'High'
      },
    ]
  },
  {
    userName: 'user2',
    tasks: [
      {
        title: 'انجام تسک ۱',
        description: ' لورم ایپسوم با ایجاد طرح ساختگی و متون فارسی برای طراحان و لورم ایپسوم با ایجاد',
        id: 1,
        person: 'عباس قربانی',
        priority: 'High'
      },
      {
        title: 'انجام تسک ۲',
        description: ' لورم ایپسوم با ایجاد طرح ساختگی و متون فارسی برای طراحان و لورم ایپسوم با ایجاد',
        id: 2,
        person: 'عباس قربانی',
        priority: 'Medium'
      },
      {
        title: 'انجام تسک ۳',
        description: ' لورم ایپسوم با ایجاد طرح ساختگی و متون فارسی برای طراحان و لورم ایپسوم با ایجاد',
        id: 3,
        person: 'عباس قربانی',
        priority: 'High'
      },
      {
        title: 'انجام تسک ۴',
        description: ' لورم ایپسوم با ایجاد طرح ساختگی و متون فارسی برای طراحان و لورم ایپسوم با ایجاد',
        id: 4,
        person: 'عباس قربانی',
        priority: 'Low'
      }
    ]
  }
]

export const userEmptyTask: Task = {
  title: '',
  description: '',
  id: 1,
  person: '',
  priority: ''
}
