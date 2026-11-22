export type PolicyInput={managedDevice:boolean;networkTrusted:boolean;risk:number};
export function evaluatePolicy(input:PolicyInput){if(input.risk>=80)return "block" as const;if(input.risk>=40||!input.managedDevice||!input.networkTrusted)return "step_up" as const;return "allow" as const;}
