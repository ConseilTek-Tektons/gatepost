import { describe, expect, it } from "vitest";
import { hasPermission, resolveRolesFromClaims } from "./rbac";

describe("Gatepost RBAC", () => {
  it("grants wildcard permissions to owners", () => expect(hasPermission(["owner"], "keys.rotate")).toBe(true));
  it("keeps key rotation away from help desk", () => expect(hasPermission(["helpdesk"], "keys.rotate")).toBe(false));
  it("maps security groups", () => expect(resolveRolesFromClaims({ groups: ["security-admins"] })).toEqual(["security_admin"]));
});
