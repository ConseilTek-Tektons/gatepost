import { describe, expect, it } from "vitest";
import { evaluatePolicy } from "./policy-evaluator";
describe("adaptive policy",()=>{it("blocks critical risk",()=>expect(evaluatePolicy({managedDevice:true,networkTrusted:true,risk:92})).toBe("block"));it("requires step-up on unmanaged devices",()=>expect(evaluatePolicy({managedDevice:false,networkTrusted:true,risk:10})).toBe("step_up"));it("allows low-risk managed sessions",()=>expect(evaluatePolicy({managedDevice:true,networkTrusted:true,risk:10})).toBe("allow"));});
