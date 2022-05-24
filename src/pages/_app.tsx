import '@aws-amplify/ui-react/styles.css';
import { Amplify } from 'aws-amplify';
import { withAuthenticator } from '@aws-amplify/ui-react';
import awsExports from '../aws-exports';
import NavBar from "../components/navbar";
import CssBaseline from "@mui/material/CssBaseline";
Amplify.configure(awsExports);

function App({ signOut, user, Component, PageProps }) {
  return (
    <>
      <CssBaseline />
      <NavBar />
      <Component {...PageProps} />
    </>
  );
}

export default withAuthenticator(App);