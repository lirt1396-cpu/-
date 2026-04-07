import Layout from '@/src/components/Layout';
import { Bell, MessageSquare, Calendar } from 'lucide-react';

export default function NotificationSettingsPage() {
  return (
    <Layout title="通知管理" showBack>
      <div className="px-6 py-8">
        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">消息通知</h3>
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <Bell size={20} className="text-primary" />
                  <span className="font-medium">系统通知</span>
                </div>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 border-b border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <MessageSquare size={20} className="text-primary" />
                  <span className="font-medium">活动消息</span>
                </div>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4">
                <div className="flex items-center gap-3">
                  <Calendar size={20} className="text-primary" />
                  <span className="font-medium">日程提醒</span>
                </div>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
