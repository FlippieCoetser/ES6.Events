import {expect} from "./bootstrap.test";
// ***************************************************************************
// * Dictionary
// ***************************************************************************
import {Dictionary} from "../src/dictionary";
type T = string;
// ***************************************************************************
// * Test Suite
// ***************************************************************************
describe("Given Dictionary<T>", () => {
    it("When Add(key, value) then ContainsKey(key) should eql true", () => {
        let dictionary = new Dictionary<T>();
        dictionary.Add("john", "doe");

        let john = dictionary.ContainsKey("john");
        expect(john).eql(true); });
    it("when Add(key, value) then Item(key) should eql value", () => {
        let dictionary = new Dictionary<T>();
        dictionary.Add("john", "doe");

        let doe = dictionary.Item("john");
        expect(doe).eql("doe"); });
    it("When Add(key, value)! then Item(key) should eql undefined", () => {
        let dictionary = new Dictionary<T>();

        let doe = dictionary.Item("john");
        expect(doe).eql(undefined); });
    describe("Given Add(key, value)", () => {
        it("when Add(key, value) then count() should eql 2", () => {
          let dictionary = new Dictionary<T>();
          dictionary.Add("john", "doe");
          dictionary.Add("john2", "doe2");

          let count = dictionary.Count();
          expect(count).eql(2); });
        it("When Add(key, value) then Keys() should eql to [key]", () => {
          let dictionary = new Dictionary<T>();
          dictionary.Add("john", "doe");
          dictionary.Add("john2", "doe2");

          let keys = dictionary.Keys();
          expect(keys).eql(["john", "john2"]); });
        it("When Add(key,value) then Values() should eql [values]", () => {
          let dictionary = new Dictionary<T>();
          dictionary.Add("john", "doe");
          dictionary.Add("john2", "doe2");

          let values = dictionary.Values();
          expect(values).eql(["doe", "doe2"]); });
        it("When Remove(key) then count() should eql 1", () => {
          let dictionary = new Dictionary<T>();
          dictionary.Add("john", "doe");
          dictionary.Add("john2", "doe2");

          let count = dictionary.Count();
          expect(count).eql(2);
          dictionary.Remove("john2");
          let count2 = dictionary.Count();
          expect(count2).eql(1);
        });
    });
});
