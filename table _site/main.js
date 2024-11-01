"use strict";

const topCompanies = [
  {
    name: "Google",
    rating: 4.5,
    location: "Mountain View, CA",
    benefit: "Innovative work environment and emphasis on career growth",
    remoteFriendly: true,
    industry: "Tech",
    foundedYear: 1998,
  },
  {
    name: "Microsoft",
    rating: 4.4,
    location: "Redmond, WA",
    benefit: "Comprehensive health and wellness benefits",
    remoteFriendly: true,
    industry: "Tech",
    foundedYear: 1975,
  },
  {
    name: "Apple",
    rating: 4.3,
    location: "Cupertino, CA",
    benefit: "Employee discounts on Apple products",
    remoteFriendly: false,
    industry: "Consumer Electronics",
    foundedYear: 1976,
  },
  {
    name: "Meta",
    rating: 4.1,
    location: "Menlo Park, CA",
    benefit: "Generous parental leave and family benefits",
    remoteFriendly: true,
    industry: "Social Media",
    foundedYear: 2004,
  },
  {
    name: "Netflix",
    rating: 4.3,
    location: "Los Gatos, CA",
    benefit: "Flexible time-off and no formal work hours policy",
    remoteFriendly: false,
    industry: "Entertainment",
    foundedYear: 1997,
  },
  {
    name: "Amazon",
    rating: 4.0,
    location: "Seattle, WA",
    benefit: "Employee stock options and internal mobility",
    remoteFriendly: true,
    industry: "E-commerce",
    foundedYear: 1994,
  },
  {
    name: "Salesforce",
    rating: 4.4,
    location: "San Francisco, CA",
    benefit: "Community-focused culture with volunteer opportunities",
    remoteFriendly: true,
    industry: "Cloud Computing",
    foundedYear: 1999,
  },
  {
    name: "Adobe",
    rating: 4.3,
    location: "San Jose, CA",
    benefit: "Focus on work-life balance and flexible schedules",
    remoteFriendly: true,
    industry: "Software",
    foundedYear: 1982,
  },
  {
    name: "LinkedIn",
    rating: 4.2,
    location: "Sunnyvale, CA",
    benefit: "Extensive professional development programs",
    remoteFriendly: false,
    industry: "Social Media",
    foundedYear: 2003,
  },
  {
    name: "Zoom",
    rating: 4.2,
    location: "San Jose, CA",
    benefit: "Fully remote options and family benefits",
    remoteFriendly: true,
    industry: "Video Conferencing",
    foundedYear: 2011,
  },
];

const industries = [
  "Tech",
  "Consumer Electronics",
  "Social Media",
  "Entertainment",
  "E-commerce",
  "Cloud Computing",
  "Software",
  "Video Conferencing",
];

// let companiesTBody= document.getElementById("companiesTBody");
let companiesTbody = document.querySelector("#companiesTBody");
let industriesDropdown = document.querySelector("#industriesDropdown");

for (const industry of industries) {
  let option = document.createElement("option");
  option.value = industry
  option.innerText = industry
  industriesDropdown.appendChild(option);
}

// topCompanies.sort(function (companyA, companyB) {
//   return companyB.rating - companyA.rating;});

for (const company of topCompanies) {
  let tr = document.createElement("tr");
  companiesTbody.appendChild(tr);

  let td1 = document.createElement("td");
  td1.innerText = company.name;
  companiesTbody.appendChild(td1);

  let td2 = document.createElement("td");
  td2.innerText = company.rating;
  companiesTbody.appendChild(td2);

  let td3 = document.createElement("td");
  td3.innerText = company.location;
  companiesTbody.appendChild(td3);

  let td4 = document.createElement("td");
  td4.innerText = company.benefit;
  companiesTBody.appendChild(td4);

  let td5 = document.createElement("td");
  td5.innerText = company.remoteFriendly;
  companiesTbody.appendChild(td5);

  let td6 = document.createElement("td");
  td6.innerText = company.industry;
  companiesTbody.appendChild(td6);
}
