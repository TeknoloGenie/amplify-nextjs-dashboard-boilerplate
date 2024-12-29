import outputs from "@/amplify_outputs.json";
import MenuLinks from "@/components/menu-links";
import "@/styles/app.css";
import "@/styles/globals.css";
import { Authenticator, Button, Card, Flex, Heading, Text, View } from "@aws-amplify/ui-react";
import "@aws-amplify/ui-react/styles.css";
import { Amplify } from "aws-amplify";
import type { AppProps } from "next/app";
import "tailwindcss/tailwind.css";
Amplify.configure(outputs);

export default function App({ Component, pageProps }: AppProps) {
	return (
		<Authenticator>
			{({ signOut }) => (
				<View style={{
				  display: "grid",
				  gridTemplateColumns: "250px 1fr",
				  gridTemplateRows: "auto 1fr auto",
				  height: "100vh",
				  gap: "1rem"
				}}>
				  {/* Header */}
				  <View columnSpan={2}>
					<Card>
					  <Flex justifyContent="space-between" alignItems="center">
						<Heading level={3}>Dashboard</Heading>
						<Button variation="primary" onClick={signOut}>
						  Logout
						</Button>
					  </Flex>
					</Card>
				  </View>
				
				  {/* Sidebar */}
				  <View rowSpan={2}>
					<Card>
					  <MenuLinks
					  	label="Components"
						items={[
						  { path: "/components/modal", label: "Modal" },
						  { path: "/components/menu-links", label: "MenuLinks" },
						  { path: "/components/table", label: "Table" },
						  { path: "/components/data-table", label: "DataTable" },
						  { path: "/components/multi-select-field", label: "MultiSelectField" },
						  { path: "/components/chip", label: "Chip" },
						  { path: "/components/autocomplete", label: "Autocomplete" },
						  { path: "/components/ordered-list", label: "OrderedList" },
						  { path: "/components/popover", label: "Popover" },
						  { path: "/components/color-selection", label: "ColorSelection" },
						  { path: "/components/dynamic-input", label: "DynamicInput" },
						  { path: "/components/dynamic-form", label: "DynamicForm" },
						  { path: "/components/dynamic-component", label: "DynamicComponent" },
						  { path: "/components/panel", label: "Panel" },
						  { path: "/components/nodegeeks-react-wysiwyg-editor", label: "WYSIWYG"}
						]}
					  />
					  <MenuLinks
					  	label="Dashboards"
						items={[
						  { path: "/dashboard", label: "Custom" },
						  { path: "/dashboard/2", label: "Support" },
						]}
					  />
					</Card>
				  </View>
				
				  {/* Main Content */}
				  <View style={{ overflowY: "auto" }}>
					<Card>
					  <Component {...pageProps} />
					</Card>
				  </View>
				
				  {/* Footer */}
				  <View>
					<Card>
					  <Text>Footer</Text>
					</Card>
				  </View>
				</View>
				
			  
			)}
		</Authenticator>
	);
}
