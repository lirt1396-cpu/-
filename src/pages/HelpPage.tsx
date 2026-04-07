import Layout from '@/src/components/Layout';
import { HelpCircle, MessageCircle, FileQuestion } from 'lucide-react';

export default function HelpPage() {
  return (
    <Layout title="帮助中心" showBack>
      <div className="px-6 py-8">
        <div className="space-y-6">
          <section>
            <h3 className="text-sm font-bold text-secondary uppercase tracking-wider mb-4">获取帮助</h3>
            <div className="bg-surface-container-lowest rounded-2xl overflow-hidden">
              <div className="flex items-center justify-between p-4 border-b border-outline-variant/20 cursor-pointer hover:bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <FileQuestion size={20} className="text-primary" />
                  <span className="font-medium">常见问题 (FAQ)</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 border-b border-outline-variant/20 cursor-pointer hover:bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <MessageCircle size={20} className="text-primary" />
                  <span className="font-medium">联系客服</span>
                </div>
              </div>
              <div className="flex items-center justify-between p-4 cursor-pointer hover:bg-surface-container-low">
                <div className="flex items-center gap-3">
                  <HelpCircle size={20} className="text-primary" />
                  <span className="font-medium">关于我们</span>
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </Layout>
  );
}
