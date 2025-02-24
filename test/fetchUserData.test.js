import { describe, expect, it } from "vitest";
import { fetchUserData } from "../src/fetchUserData";

describe('fetchUserData', () =>{
    it('should resolve with the user data when the user ID is valid', 
        async() =>{
           const result = await fetchUserData('validUserId')
           expect(result).toEqual({id: "validUserId", name: 'Bappy'})
        }
    )

    it('should reject with when user ID is invalid',
      async() =>{
       await expect(fetchUserData('invalid')).rejects.toBe("User not found!")
      }  
    )
})