import Layout from '../components/Layout'

export default function Legal() {
  return (
    <Layout>
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900">Legal</h1>
          <div className="prose prose-slate max-w-none">
            <p>This website provides general information only and does not constitute professional advice. All projects are subject to local codes and approvals. © {new Date().getFullYear()} ModuBuild Architects. All rights reserved.</p>
            <p>Privacy: We process personal data provided via contact forms solely to respond to your inquiry. We do not sell personal data. For deletion requests, contact privacy@modubuild.example.</p>
            <p>Terms: By using this site you agree not to misuse our content or trademarks. Modules and connectors may be protected by patents and design rights.</p>
          </div>
        </div>
      </section>
    </Layout>
  )
}
