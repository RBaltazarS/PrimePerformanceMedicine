import { Layout } from '@/components/layout/Layout';
import { HeroSection } from '@/components/sections/HeroSection';
import { ConceptSection } from '@/components/sections/ConceptSection';
import { ProtocolsPreview } from '@/components/sections/ProtocolsPreview';

export default function Home() {
  return (
    <Layout>
      <HeroSection />
      <ConceptSection />
      <ProtocolsPreview />
    </Layout>
  );
}
