import { React, Component } from "react";
import "./Profile.css";
export const Profile = () => {
  return (
    <div className="wrap">
      <div className="cards">
        <div className="search">
          <input
            className="search__btn"
            type="search"
            placeholder="Search..."
            defaultValue={this.state.search}
            onChange={this.handleSearchChange}
          ></input>
          <label className="check" id="man" onChange={this.isMale}>
            <input
              type="checkbox"
              name="man"
              defaultChecked={this.state.isMale}
            ></input>
            Mens👨
          </label>
          <label className="check" id="woman" onChange={this.isFemale}>
            <input
              type="checkbox"
              name="woman"
              defaultChecked={this.state.isFemale}
            ></input>
            Womens👩
          </label>
          <label className="check" id="unisex" onChange={this.isUnisex}>
            <input
              type="checkbox"
              name="unisex"
              defaultChecked={this.state.isUnisex}
            ></input>
            undefined
          </label>
        </div>
        <div className="header">
          <span className="name">First Name</span>
          <span className="name">Last Name</span>
          <span className="phone">Phone</span>
          <span className="sex">Sex</span>
        </div>
        {this.state.filtered.map((cnt, index) => (
          <div key={index}>
            <div className="contacts">
              <span className="name">{cnt.firstName}</span>
              <span className="name">{cnt.lastName}</span>
              <span className="phone">{cnt.phone}</span>
              <span className="sex">{getMFIcon(cnt.gender)}</span> {}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export const contacts = [
  {
    firstName: "Барней",
    lastName: "Стинсовський",
    phone: "+380956319521",
    gender: "male",
  },
  {
    firstName: "Робін",
    lastName: "Щербатська",
    phone: "+380931460123",
    gender: "female",
  },
  {
    firstName: "Анонімний",
    lastName: "Анонімус",
    phone: "+380666666666",
  },
  {
    firstName: "Лілія",
    lastName: "Олдровна",
    phone: "+380504691254",
    gender: "female",
  },
  {
    firstName: "Маршен",
    lastName: "Еріксонян",
    phone: "+380739432123",
    gender: "male",
  },
  {
    firstName: "Теодор",
    lastName: "Мотсбес",
    phone: "+380678123456",
    gender: "male",
  },
];
export function getMFIcon(str) {
  let sign = "";
  switch (str) {
    case "male":
      sign = "👨";
      break;
    case "female":
      sign = "👩";
      break;
    default:
  }
  return sign;
}
export default class Contacts extends Component {
  state = {
    contacts: [...contacts],
    filtered: [...contacts],
    search: "",
    isMale: true,
    isFemale: true,
    isUnisex: true,
  };
  isMale = async () => {
    await this.setState({ isMale: !this.state.isMale });
    this.filterData();
  };

  isFemale = async () => {
    await this.setState({ isFemale: !this.state.isFemale });
    this.filterData();
  };

  isUnisex = async () => {
    await this.setState({ isUnisex: !this.state.isUnisex });
    this.filterData();
  };

  handleSearchChange = async (ev) => {
    await this.setState({ search: ev.target.value });
    this.filterData();
  };

  filterData = async () => {
    await this.setState(() => {
      const searchLwr = this.state.search.toLowerCase();
      const fltr = this.state.contacts
        .filter(
          (man) =>
            (man.gender === "male" && this.state.isMale) ||
            (man.gender === "female" && this.state.isFemale) ||
            (man.gender === undefined && this.state.isUnisex)
        )
        .filter(
          (item) =>
            item.firstName.toLowerCase().includes(searchLwr) ||
            item.lastName.toLowerCase().includes(searchLwr) ||
            item.phone.toLowerCase().includes(searchLwr)
        );
      return {
        filtered: [...fltr],
      };
    });
  };
  render() {
    return (
      <div className="wrap">
        <div className="cards">
          <div className="search">
            <input
              className="search__btn"
              type="search"
              placeholder="Search..."
              defaultValue={this.state.search}
              onChange={this.handleSearchChange}
            ></input>
            <label className="check" id="man" onChange={this.isMale}>
              <input
                type="checkbox"
                name="man"
                defaultChecked={this.state.isMale}
              ></input>
              Mens👨
            </label>
            <label className="check" id="woman" onChange={this.isFemale}>
              <input
                type="checkbox"
                name="woman"
                defaultChecked={this.state.isFemale}
              ></input>
              Womens👩
            </label>
            <label className="check" id="unisex" onChange={this.isUnisex}>
              <input
                type="checkbox"
                name="unisex"
                defaultChecked={this.state.isUnisex}
              ></input>
              undefined
            </label>
          </div>
          <div className="header">
            <span className="name">First Name</span>
            <span className="name">Last Name</span>
            <span className="phone">Phone</span>
            <span className="sex">Sex</span>
          </div>
          {this.state.filtered.map((cnt, index) => (
            <div key={index}>
              <div className="contacts">
                <span className="name">{cnt.firstName}</span>
                <span className="name">{cnt.lastName}</span>
                <span className="phone">{cnt.phone}</span>
                <span className="sex">{getMFIcon(cnt.gender)}</span> {}
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
