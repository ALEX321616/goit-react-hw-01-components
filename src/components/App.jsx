import Profile from 'components/Profile';
import user from 'patch/user';
import Statistics from 'components/Statistics';
import data from 'patch/data';
import FriendList from 'components/FriendList';
import friends from 'patch/friends';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'patch/transactions';

export default function App() { 
  return (
    <>
         <Profile
        avatar={user.avatar}
        username={user.username}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />
      <Statistics title="Upload stats" statics={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  )
}


// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
