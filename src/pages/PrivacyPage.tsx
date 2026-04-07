import Layout from '@/src/components/Layout';
import { Shield, Eye, FileText } from 'lucide-react';

export default function PrivacyPage() {
  return (
    <Layout title="隐私与安全" showBack>
      <div className="px-6 py-8">
        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">隐私设置</h3>
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <Eye size={20} className="text-primary" />
                  <span className="font-medium">向其他人展示我的活动</span>
                </div>
                <input type="checkbox" className="toggle" defaultChecked />
              </div>
              <div className="flex items-center justify-between p-4 border-b border-outline-variant/20">
                <div className="flex items-center gap-3">
                  <Shield size={20} className="text-primary" />
                  <span className="font-medium">双重身份验证</span>
                </div>
                <input type="checkbox" className="toggle" />
              </div>
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <FileText size={20} className="text-primary" />
                  <span className="font-medium">隐私政策</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
