import Button from "./Button";
import { useState } from "react";
import { motion } from "framer-motion";

const SearchBar = (props: any) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    props.getCityName(city);
  };

  return (
    <>
      <motion.div initial={{ y: -100 }} animate={{ y: 0 }} className="z-2">
        <form
          onSubmit={handleSubmit}
          className="d-flex justiy-content-between align-items-center "
        >
          <div className="input-group mb-3">
            <input
              type="search"
              className="form-control search-bar"
              placeholder="Search for city"
              aria-label="Search for city"
              onChange={(e) => {
                setCity(e.target.value);
              }}
              required
            />
            <Button
              type="submit"
              className="btn btn-primary shadow"
              name="Search"
            />
          </div>
        </form>
      </motion.div>
    </>
  );
};

export default SearchBar;
