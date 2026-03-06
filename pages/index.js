import React from 'react'

export default function Home() {
  return (
    <main style={{ padding: '2rem', fontFamily: 'system-ui, sans-serif' }}>
      <h1>Welcome to Cursor</h1>
      <p>A Next.js app powered by Supabase</p>
      
      <div style={{ marginTop: '2rem', padding: '1rem', backgroundColor: '#f5f5f5', borderRadius: '8px' }}>
        <h2>Configuration Status</h2>
        <ul>
          <li>✓ Next.js app set up</li>
          <li>✓ Supabase credentials configured</li>
          <li>✓ Netlify deployment ready</li>
        </ul>
      </div>

      <div style={{ marginTop: '2rem', color: '#666' }}>
        <p>Deploy ID: <code>brilliant-dolphin-8cd4c7.netlify.app</code></p>
        <p>Edit the pages/ directory to add your content.</p>
      </div>
    </main>
  )
}
