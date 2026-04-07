import Layout from '@/src/components/Layout';
import { ChevronRight, User, Mail, Lock } from 'lucide-react';

export default function SettingsPage() {
  return (
    <Layout title="账户设置" showBack>
      <div className="px-6 py-8">
        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">基本信息</h3>
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-outline-variant/20 cursor-pointer hover:bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <User size={20} className="text-primary" />
                  <span className="font-medium">个人资料</span>
                </div>
                <ChevronRight size={18} className="text-outline" />
              </div>
              <div className="flex items-center justify-between p-4 border-b border-outline-variant/20 cursor-pointer hover:bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <Mail size={20} className="text-primary" />
                  <span className="font-medium">邮箱绑定</span>
                </div>
                <ChevronRight size={18} className="text-outline" />
              </div>
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <Lock size={20} className="text-primary" />
                  <span className="font-medium">修改密码</span>
                </div>
                <ChevronRight size={18} className="text-outline" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
