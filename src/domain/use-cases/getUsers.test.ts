import { GetUsers } from ".";
import MockUserRepository from "../../infrastructure/mockUserRepository";

const api = new MockUserRepository()

describe("UsersUseCases", () => {
    it("should be defined", () => {
      expect(api.getUsers).toBeDefined();
    });
  
    it("should return a list of ten user", async () => {
        const result = await api.getUsers()
        let expected = result.info.results;
        expect(expected).toBeGreaterThan(0);
        expect(expected).toEqual(10);
    });
    it("should return that list with page 1", async()=> {
        const result = await api.getUsers()
        let expected = result.info.page;
        expect(expected).toEqual(1);
    })
  });