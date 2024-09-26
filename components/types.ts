import * as UI from "@aws-amplify/ui-react";

type ExcludedComponents = "Alert" | "Loader" | "ProgressBar";

export type AmplifyUIComponentType = Exclude<keyof typeof UI, ExcludedComponents>;