import { MyList } from './my-list'

export const Hobbies: React.FC = () => {
  return (
    <MyList
      items={[
        {
          icon: '🍿',
          iconLabel: 'pop corns',
          text: 'I like movies',
        },
        {
          icon: '🎸',
          iconLabel: 'guitar',
          text: 'I play jazz guitar',
        },
        {
          icon: '🥳',
          iconLabel: 'partying with people',
          text: 'People',
        },
      ]}
    />
  )
}
