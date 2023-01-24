import Layout from '@theme/Layout';
import React from 'react';

import ApplyForm from '../components/ApplyForm.js';


function ApplyPage() {
  return (
    <Layout
      title="DocSearch: Search made for documentation"
      description="The easiest way to add search to your documentation - Powered by Algolia"
    >
      <div className="uil-pb-24">
       
        <ApplyForm />
      </div>
    </Layout>
  );
}

export default ApplyPage;
Give feedback
