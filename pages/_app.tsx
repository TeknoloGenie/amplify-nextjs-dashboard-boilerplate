import "@/styles/app.css";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { Amplify } from "aws-amplify";
import outputs from "@/amplify_outputs.json";
import "@aws-amplify/ui-react/styles.css";
import { Authenticator, Grid, Card, Button } from '@aws-amplify/ui-react'

Amplify.configure(outputs);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Authenticator>
			{({ signOut, user }) => (
				<Grid columnGap="0.5rem" rowGap="0.5rem" templateColumns="1fr 1fr 1fr" templateRows="1fr 3fr 1fr" >
					<Card columnStart="1" columnEnd="-1" >
					<Button variation="primary" loadingText="" onClick={signOut} >
  						Logout
					</Button>
					</Card>
					<Card columnStart="1" columnEnd="2" >
						Nav
					</Card>
					<Card columnStart="2" columnEnd="-1" >
						<Component {...pageProps} />
					</Card>
					<Card columnStart="2" columnEnd="-1" >
						Footer
					</Card>
				</Grid>
			)}
		</Authenticator>
	);
}
