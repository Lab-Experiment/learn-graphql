const faker = require("@faker-js/faker");

const dynamicDatabase = {
  users: new Array(10).fill(null).map(() => ({
    id: faker.allFakers.id_ID.string.uuid(),
    name: faker.allFakers.id_ID.person.fullName(),
    email: faker.allFakers.id_ID.internet.email(),
  })),
};

const staticDatabase = {
  users: [
    {
      id: "cfb04596-52ca-41c5-a901-3944b7790e37",
      name: "Deri Kurniawan",
      email: "deri.netuchi@gmail.com",
    },
    {
      id: "c92c5322-a944-44bc-8e45-03d9e612e3f6",
      name: "Nardi Nardi Santoso",
      email: "Tania_Kub53@yahoo.co.id",
    },
    {
      id: "0cb34019-017e-4a4a-a972-5591e164b79b",
      name: "Gamanto Mahendra",
      email: "Pranata_Jones@yahoo.co.id",
    },
    {
      id: "c937533d-054d-4e48-ba3e-94875f641f9f",
      name: "Ajeng Kusuma",
      email: "Teguh.Hessel@yahoo.co.id",
    },
    {
      id: "a8306880-abf3-4c09-8565-6fa8a6dcb9cc",
      name: "Rachmawati Nilam",
      email: "Bajragin34@gmail.com",
    },
    {
      id: "9e19704a-c3f2-4e0b-87e5-1448ba0566d5",
      name: "Ira Nurlaela",
      email: "Ismail18@yahoo.com",
    },
    {
      id: "ded02362-b09c-4344-8a25-b3295ecd97ae",
      name: "Ardianto Cakrabirawa",
      email: "Lukman30@gmail.com",
    },
    {
      id: "d2443671-e6b8-4c44-a742-2a7d3eeeb645",
      name: "Nurdiyanti Azalea",
      email: "Rosalina.Heaney@yahoo.co.id",
    },
    {
      id: "1a346d05-7bd1-4c8a-a364-5b8f8a945b4d",
      name: "Hastuti Uchita",
      email: "Ibrahim.Gottlieb@yahoo.co.id",
    },
    {
      id: "5420b7f7-38ff-450b-930f-ad9ad341fb78",
      name: "Harjaya Harjaya Mangunsong",
      email: "Gandi.Olson42@gmail.com",
    },
  ],
};

module.exports = {
  dynamicDatabase,
  staticDatabase,
};
