import { users } from "./users";
import { sessions } from "./sessions";
import { accounts } from "./accounts";
import { verifications } from "./verifications";
import {
  sessionsRelations,
  usersRelations,
  accountsRelations,
} from "./relations";

export const schema = {
  users,
  sessions,
  accounts,
  verifications,
  usersRelations,
  sessionsRelations,
  accountsRelations,
};
