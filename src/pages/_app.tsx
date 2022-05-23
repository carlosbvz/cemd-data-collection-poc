import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';
import awsExports from '../aws-exports';
Amplify.configure(awsExports);

function App({ signOut, user, Component, PageProps }) {
  return (
    <>
      <button onClick={signOut}>Sign out</button>
      <Component {...PageProps} />
    </>
  );
}

export default withAuthenticator(App);