import { type Contact, type InsertContact, contacts } from "@shared/schema";
import { db } from "./db";

export interface IStorage {
  createContact(contact: InsertContact): Promise<Contact>;
  getAllContacts(): Promise<Contact[]>;
}

export class DBStorage implements IStorage {
  async createContact(insertContact: InsertContact): Promise<Contact> {
    const [contact] = await db.insert(contacts).values(insertContact).returning();
    return contact;
  }

  async getAllContacts(): Promise<Contact[]> {
    return await db.select().from(contacts).orderBy(contacts.submittedAt);
  }
}

export const storage = new DBStorage();
