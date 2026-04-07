import Layout from '@/src/components/Layout';
import { UserPlus, Search, User } from 'lucide-react';
import { useState } from 'react';

const SUGGESTED_FRIENDS = [
  { id: 1, name: '张小明', avatar: 'https://picsum.photos/seed/1/100/100' },
  { id: 2, name: '李华', avatar: 'https://picsum.photos/seed/2/100/100' },
  { id: 3, name: '王芳', avatar: 'https://picsum.photos/seed/3/100/100' },
];

export default function FriendsPage() {
  const [friends, setFriends] = useState(SUGGESTED_FRIENDS);

  const addFriend = (id: number) => {
    // In a real app, this would call an API
    alert(`已向好友发送请求`);
  };

  return (
    <Layout title="社交好友" showBack>
      <div className="px-6 py-8">
        <div className="relative mb-8">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-outline" size={20} />
          <input 
            className="w-full bg-surface-container-low border-none rounded-xl py-4 pl-12 pr-4 text-on-surface placeholder:text-outline" 
            placeholder="搜索好友昵称或ID..." 
          />
        </div>

        <section>
          <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">建议添加</h3>
          <div className="space-y-4">
            {friends.map(friend => (
              <div key={friend.id} className="flex items-center justify-between p-4 bg-surface-container-lowest rounded-xl">
                <div className="flex items-center gap-4">
                  <img src={friend.avatar} alt={friend.name} className="w-12 h-12 rounded-full object-cover" />
                  <span className="font-medium">{friend.name}</span>
                </div>
                <button 
                  onClick={() => addFriend(friend.id)}
                  className="p-2 bg-primary/10 text-primary rounded-lg hover:bg-primary/20 transition-colors"
                >
                  <UserPlus size={20} />
                </button>
              </div>
            ))}
          </div>
        </section>
      </div>
    </Layout>
  );
}
