async function testHandshake() {
  console.log('--- Phase 1: Initiating Handshake (WP Plugin Side) ---');
  const handshakeResponse = await fetch('http://localhost:8080/api/handshake', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ siteName: 'Test WordPress Site', siteUrl: 'https://test-wp.local' })
  });
  const handshakeData = await handshakeResponse.json();
  console.log('Handshake ID:', handshakeData.handshakeId);
  console.log('Authorization URL (Open this in your browser):', handshakeData.authUrl);

  console.log('\n--- Phase 2: Simulating User Approval (Vault UI Side) ---');
  const authResponse = await fetch('http://localhost:8080/api/remote/authorize', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ handshakeId: handshakeData.handshakeId })
  });
  const authData = await authResponse.json();
  console.log('Authorization Success:', authData.success);
  console.log('Received Permanent Token:', authData.token);

  if (authData.token) {
    console.log('\n--- Phase 3: Simulating Remote Save (WP Plugin Side) ---');
    const saveResponse = await fetch('http://localhost:8080/api/remote/save', {
      method: 'POST',
      headers: { 
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${authData.token}`
      },
      body: JSON.stringify({ 
        title: 'Remote Sidebar', 
        category: 'Navigation', 
        content: '{"bricks": "data"}' 
      })
    });
    const saveData = await saveResponse.json();
    console.log('Remote Save Success:', saveData.success);
    console.log('Saved Template Link:', saveData.demoUrl);
  }
}

testHandshake().catch(console.error);
