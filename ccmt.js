const fetch = require("node-fetch");
const fs = require("fs");

const querystring = require("querystring");

const prefix = "ctl00%24ContentPlaceHolder1%24ddlinstitute=";
const payload = `__EVENTTARGET=ctl00%24ContentPlaceHolder1%24ddlinstitute&__EVENTARGUMENT=&__LASTFOCUS=&__VIEWSTATE=7WQBEONLlMNPibV%2FIxq%2F2RUlqQZPWf4h8SS%2FSSwFtp%2B9GeQYJ%2FR7%2FGIOCdLZ%2F%2FNf9jzwL9WmeUPdx5M9wbc1ObJP6LCn5DYNL816Zofv%2FgSfl%2BP0B03T9EZsEteF734QeFla6FDUHocfk4LhdLnIye2UNgBmVeniESvyM%2BBmFuvZwZyiObXz%2Bnw5VJvJz1Zfxe22ckhFNoo2ogkevTvCSrlbxMo9%2FL7EnXwUeT94mzy7pLp3NNnf4YnzqIcxejxruRqB%2Fil8H4qzLFo6gpy1pfEahZ8ced3YKCUiJUNPsvLvDwk9L9Ia0vblxhK4iPVsFjiBmvxqczVPliZJ2tMV%2BNaORYtm1IgD1M3AuBPdu2a3%2BXn%2FiYZg9o5t7NqIDEBuLxVJ0o8POr4pj5%2FUqWZ4tQ%2FzixAhI762CPIf8Ocno1zwh4zl574pZbprHBueqwXnelaRMzGGnyCwRcs49Cq6cyRvg0Sz3aeVDQgyX%2FgH9XpBcqoHim2J63DsjxCfrC1Qb59avzfB7x7JkFp02W24f91uO8dao%2FIs6301Bo%2ByKG%2B3L%2BGT7UCWTbKvaQsXkiITsvP7peZqpogaWbI628kREATcqKB1Z1q0S52SUpYNeHXluK0%2FlE9GNIMjzU2mZAROR8ju5ZuVThJsuPqqu925RbWkQ4EcLJFntB4C7YOgbb0kggtVGty1LyyeLM1hesd2W3uvjOOrrc1a1OVzZoal%2FiETf8smNXrS1M08ulhjkmgn3Wt7Olidv5%2FRUKzR2w%2FmWQunYm7p3OUxpiy06o7Zi%2BkhOsLBSnnJEgZbX%2FnZm%2Ff%2F7ooZt8FiI9GAqKqy7hZi32sDFfPKR3qcvUjxkSLJq7bag8dvP32vMgeKb9%2BTVIt8GE4urVg%2B2h7J168qmk7Ubpk9qYg69Axni0vDNz88XDVleAcUlKUwSH2Kbl0RP7DrjBehSxGktlCaIX8DyCU3cxAihuuR%2FYTJBe6hJSFq7yBc4SrNpwfDy9yAch0h7726FYJ6CSO6a5lkN4Sq4Rm56P55aJvLcn2V%2BZRkLIEMX9kH3I7QT7pzjJuN7l34jqhkUa4HChZxjTScxmwmvvlsGypgknW4wQhgPJ3H1EjneCLpE9LcDqOi%2B2EfJysVWgflS%2FGYwmxdc8u60dyktOuuMDDRxbkhLlgWj9x3%2BHVOC6KRqz5lnJaIbZFLM889UCVRgiNF7xDtxe1vxUY%2FGDlWhO83cKJCpe0w%2FAaa4%2Bxj5TKvv1wh%2BgY%2BxwxwAvV8OOMTrCffbxTOCWcu9UqpHdjt39IFrwCcRy7oFDsrsUjOd9OogpY4xbws4EZcSnAz8hgL71S%2BREE18U0NwSrKXEydRV9NuN43FNd3SgXY08a%2B8HjPv9GbMR7wrJ8jos7jYb%2B2OvDJhF4s%2FlyE%2F9xyxctrjZjbOeE9%2ByqFI7TowxWTuu5d%2BYfT8gV1dP9mQZ%2B6QFj%2BMmz%2Fg4JsXwsE5x1NpwTb83EahhHCCKU3cvPlqmWR7Vv6HJZ3PK%2F1tBa%2F6D7jGL%2B7lRPnp4aKcOHaRoAfNl7KpayCzJF%2B%2BmLc6Nom7VayOy4WXS9vuVTes%2FnvaZFVuqTKlczFlm7vt4UDFDYNBhEA32FtXKOyWeeJz6q1ggHcpHGFvbKywF5mQkV0RTMJVgsNzHa5srqmAEPj2IL4rq9A0Y0aNVNzX6uyEs1ekECV4hUMMZr3p2lQCEId%2FBD6pa009IrtkXstSkxeZ0rUwehqY6oifmQKgcYeuVrL4tKnRfsznTJG5AQV%2FsnnQxSblBI7u%2BgD%2BAtCl4JFitK86ycEXjeOEWsxNUfo%2FgD6UtaHWz60YbIay%2Fzkb7zJ0KEDdPwhOXQB4kAb2eDEDGMUtNrE0UOqLcmQhubEmFGxMNJoqamq1tn7Y85WvpjZUpnkO3OSDTeJggT1ynTkdxhmKCxrzrVwcr6iFd3fYFg45KAXZAUKxWMoLE4rtIAWZ44txLlf3I0AfpgFn%2Bdhxz0ANY1RVSFF0cxaKeyMIJQbp9I%2FEp42l%2FPDvD%2BezEe%2FaniIohI952Zgr09kAJ%2Bx8j4dn%2FR99ZYQk4IHD4%2Fr588Sm85%2BPz%2FX3uhhS877bfeQo9un407CRS66Tio0trPoP2a6X3bnJWs8uzNBCZt%2FW3%2BYy%2BrPCo3RfPdTo2Iit2nYwJZrBdr3rT%2FlBiqo%2FaDvFYQqHHS9Z55QRWcIz1y8F3kkwpf7XJhxIe34rSJqiSvP%2B8mSC4q%2FavEFcqy6eq96n9khmmX7AOJ0cNtRi%2BaP9eCCj5UhmH4Vm3jlUkEZyz%2BluQbVQVx9TJj4NAfkUfJzcnW%2F4Nz01eg461oYVK7gPAzuaPsJLU9sdlMLOzkJvQ6CSlDvnAZaw7p7xfSEJGXrawbhM8IuGuUxYm%2BzjVyLBrQyuaRgyzqDRqZbvBatvIqvim60sXHw2JPNtbrbR3l725lGBRks8wCon1J%2Fbf8oz%2Fwqd1pvBVU4nDsBhwnSHutCSCkOU4gyYqyXJa3G9NB2PEWVDUFuXBDO9sE3AXsEJ05zULJ2nChmkZfq6MY8FisNYW6qvmhOIy5FzzGvoJrs0CB2nMZCcU8WFOdeLmMRVUFvXnV2iHxOqo%2BfXcEYOroMrhwX%2BrexAoRPwJsU9wnwvmGs8LxrsC9oAMfvVdN1%2F2HigANseiD55IgbkVyXorsVJpXP3FDeSaxg%2F197c8fYEx0cJJfDFD6Jns1A8%2Fq0T8CHcOicROshqJmTop%2BMRgQ%2FkB%2BwXML8V7PpZYHrqrfW2tkVpKYKVBd%2BrWtSajuew8jFb8Y%2BfVAyKa3jU1Zu9Z%2BfZR9KGK2wO0dmrF%2BRao%2Bo57dw087rBByqiCeaBAvth%2Bk7u2psQAMXa%2BuogBPVJXZTKa1aHcCRPVhVVmoHQ9EQhvsuij%2FG5teglN2S9wtnnGXw5hkDSC%2FC9Uh5DxtMCMLQjYLVCDJEI27WAuae0yGa4srR%2BKHSK7RApu9OMQQ4hTjtOJh1xYSQ2pBuy%2F0%2B1NX1jZFe75g6dDtHwQ%2BMX7z1alLlDBj1Dt0wvuyNs5xLfrIwtYHhSpsX9gGbzs8pIPkxoysljlBFkFofxYXH%2BaFb4r%2FkFNVbDUejWpSrsqUI5TQ8zLDvplahSZ%2F3ksu%2BhK%2FqSjIUnHLm4%2FhZOOw9clxZHjul%2FgdbB7hGvWt%2FjIMT9nzM0Vws3267YCJfP1tiPpwdcCM2Zqr3tlxRnimbgmt9D4qvJwOHadsucxg3Q0AQCQJvLVChl1FrtwgZ3I5qL25AFFGazeXN%2FFl4iAOwJ4pUME%2FvbSZdHawVHSisOkSq%2Bc1SMUbvzR6hlFb3u3pR6nEFKJs%2F32yZmtOr%2FQA8bVXByasGXthPaQjjYBKZXW1CoRqFHX1pdnEZY%2BSwORBKXGV%2BeDjtjme33gOwfjo8oj8%2Bgx6eS5g5c5plu02ZLyYQgnwcY3K0OqfN%2BQNRcx9Z9XXVKY3FfBHKyghO7GhV0ihD58lll%2FTs6ngkPExFu3ixWMiLnq5bOQQYZxpwt3U5OQDvaMVpEFgzxLQyXPhrE3zKPt68qS32I9Pc91rTL1w6AaTJArpxstTMELDzgyhC3fpDs94m%2Fs8fMcsmIYJZp%2FlcSHDqD5g5AON19K8YZgUT6qYx8kQerp4%2F71felWR05meY0vNjwL7OK3w614iBomK9K1Rl0%2Fa7qWPW%2FR910cbg0vBDwi%2BZgr4yGAfCnB2M33i63vkX0uQkva8zvcQcZ9rcR8D8DeAb5Z6sB6874LKuajJJvjaPOED0QgoRfASr0tM8JVy2maHDzBj%2F%2FEhkGpa14v055eC4vcUze5K6iJTJ6YWjg%2F0r%2FAeNrEnFwU5rkAjgdqMdM1iaI7P7E6WQNiT%2F9FiNxVGhdvnAKKbjNoMBMRQLy%2BwpRcQd6E5iQW%2FfeUvcC0DnpO9wLeYzG56KCMs2z%2BhjQCA2scRCRLYbxXTDMWG7bcxJYkxEo1tvm9N7lQNzXPvvX4NwKmefjHyz3IzCE93Dx1oixz%2BhWMCuKnE2XO2SGumR9eAUsJ3JBLo7eeX8gixWo88clugqGvCB%2B7lAJEdJyEJpW3yv%2F47keT1G37HqkcVN2vHFhYH7SHuYDUQ1KLr6YVM5fnt%2F71G3xD3%2FfTiNB5ZnhLHVOH9pgeabPeVJHh0k%2B2mbGXm5UrJwrasn%2B%2F1HuvfSa7y6p6P61qNEewdCf4T%2BdlnlC3GVEaioZHMAZn8FtjGwJDjitvZ2vgmNXBFtDExsAx%2BbLnUJ4TWH7P88qYg0zgftkeD3bhPhGgXKIJbvaoPrpCB6HdQbhKdwDU8fJljQL9qfp0JobnJ9TuVF1fse4UYYmfMNdbOWlUR3Rp%2BvlZpSNy%2F6LkKWYiYgEJGMcUYYPsd4ehgQWexlexVvLVdgbYyX0jH6BMIBN186%2BX6lBSSakgGiIhl%2BXzMJBCr1ONLJ1qPNxKZlAkAqswGf8SXTgTbfHG0og1uxJ0xCOR7EHWosx%2FKzIHiMdmKy7IPDRzV8bOcKRxj5UoMM8qCldG%2BI31Z9jOHJ0QmGcCoNXk1sF2WZ6Oo%2F1wY2EAHP%2FyzPNxM7tyzvdETveV6N7Eu%2F%2Fp5qUO1QEBPVHyN4%2FstXmO6bcogoYfVZ4EqDIUcVFJexIOBMyJ64QPxr3QgtL9hxNbdLdOQMpQ%3D%3D&__VIEWSTATEGENERATOR=0900D058&__VIEWSTATEENCRYPTED=&__EVENTVALIDATION=SpDSSL4WLLd7sXuLx%2FcMKQg10DfMQjHBId639AW84NNbbvy4V21J4D72ZX0Z4jnOIZGyLqHLnkb6b5h1WTTHtTdZIUi5MgrDRw5RBCBCXOsQ%2F4zhdLV%2B4EnwRPvyDGa9VVA%2Fdtmn%2BG1Tgt9r8Nlso8UnWoDHi4sz3yU7HK5lnCFEJrVIarZw6zYfbNEPNit%2BjsusodT0MxJsL%2BW5YYbHhCBVdIwL457I6XxXqkixfSGOK3TTwAlQx%2BvJewV0b6XHzvMPertugNE9v%2Fw6Kk9824bRWJpNqYnDTl7thuT%2BuYJ1e65vyjtphKnXEngn4utnwIMHC7bip8UraARilgRLLDASHOrb28ryVsHh1T3i5ddy%2F1cJHTWJIHOG5impPJBQbox1VVKjgJTizwjJK4ySxlm2O4scfRCVFeu4ElYIQuTbgqmDsj%2BAsRx5Q7Hi7Jrt9cW6vfZgi59C0d5bJ%2BesPFbJ9A8pyiveWd%2BMu7UM5cpbvW2UAwd5IErFXcpUId2SLAv7pxjhCses6a7gJbShFsVXKUC8DQTC%2BQKlkkASqN01j5qr6vcM%2B%2FpTztkEdCFF%2FYcAFa8yZzuobMz2YgRWEsCaY6kQ1%2FzN3LU2Bkg7J6R%2Bl9BsgSBbqvhcNdGq6n%2F5AbnhnJ2vG0uwJj4OnLX1C2VKJcmIrThcy1%2Fu57tvMkD2Hvb5Bho02c3PbETlzKcH4tsLLptFh3fLF8Gq7ncnm2SiG6WgMBBJs8z6XaWRkA%2BDVDqmqD4UgUCS2Z5cyGpvnjRZXkllHWSfrn3KfVx57Or8arJnry43AvNEQUzrrJDDcc6F6D2Xcno0xFOlMDiWg2CaxamSR3TFLOW87SqFZnTNw3s9dNMmv%2BbIBi03RaqaxS3Wbn6hLGmoBPN4CM8sFfQD%2BO1bd07eP%2F218zOdRz2NA158NzzeewgwvGsGT5tmD%2BK4bdHENbAk9Xl421GLoL%2BzcyKxjn7sS%2BAzo5WItMzu4VwLShYKKNi1ixlehg3h9rG2OUc7kd6hkvOWoXmla8oxEj8auNX%2FX9gXwomzNCcir0fV7Q2t4o%2F16Ibty%2BUVJgYewhDP1a1Ms1DSLQTrcVT7c2rOHup4tPX%2Bd17cJ9pOUShGTYMyV1LRx0ckz0L0IQksU3INJSebLL7bpYRHpIl9IyWoGRY1qBcpPanikGTL5Y2Ic5tKNb4b8AUAGESigNrQ0msL2ulNNKFjEHxRTLUY2gcwMdynr62KjQ1uoRlvsA%2FzWpvPtlzXn%2BmTmK7WJhfXrqo7nnuR0zxcWFzGR04ldTvRRalGpZ1SCEDHaJa%2FbH%2B9y0ombJ5I0GoUvH91KrGa&ctl00%24hdnSecKey=`;
// return;
const codes = {
  "201": "Dr. B R Ambedkar National Institute of Technology, Jalandhar",
  "202": "Malaviya National Institute of Technology Jaipur",
  "203": "Maulana Azad National Institute of Technology Bhopal",
  "204": "Motilal Nehru National Institute of Technology Allahabad",
  "205": "National Institute of Technology  Agartala",
  "206": "National Institute of Technology Calicut",
  "207": "National Institute of Technology Delhi",
  "208": "National Institute of Technology Durgapur",
  "209": "National Institute of Technology Goa",
  "210": "National Institute of Technology Hamirpur",
  "211": "National Institute of Technology Karnataka, Surathkal",
  "212": "National Institute of Technology Meghalaya",
  "213": "National Institute of Technology Nagaland",
  "214": "National Institute of Technology Patna",
  "215": "National Institute of Technology Puducherry",
  "216": "National Institute of Technology Raipur",
  "217": "National Institute of Technology Sikkim",
  "218": "National Institute of Technology Arunachal Pradesh ",
  "219": "National Institute of Technology, Jamshedpur",
  "220": "National Institute of Technology, Kurukshetra",
  "221": "National Institute of Technology, Manipur",
  "222": "National Institute of Technology, Rourkela",
  "223": "National Institute of Technology, Silchar",
  "224": "National Institute of Technology, Srinagar",
  "225": "National Institute of Technology, Tiruchirappalli",
  "226": "National Institute of Technology, Warangal",
  "227": "Sardar Vallabhbhai National Institute of Technology, Surat",
  "228": "Visvesvaraya National Institute of Technology, Nagpur",
  "229": "National Institute of Technology Uttarakhand",
  "230": "National Institute of Technology Mizoram",
  "231": "National Institute of Technology, Andhra Pradesh",
  "301":
    "Atal Bihari Vajpayee Indian Institute of Information Technology &amp; Management Gwalior",
  "302": "Indian Institute of Information Technology, Allahabad",
  "303":
    "Indian Institute of Information Technology, Design &amp; Manufacturing Kancheepuram, Chennai",
  "304":
    "Pt. Dwarka Prasad Mishra Indian Institute of Information Technology, Design &amp; Manufacture Jabalpur",
  "308": "Indian Institute of Information Technology Vadodara",
  "309": "International Institute of Information Technology, Bhubaneswar",
  "310": "Indian Institute of Information Technology, Lucknow",
  "311": "Indian Institute of Information Technology, Pune",
  "317":
    "Indian Institute of Information Technology, Design and Manufacturing, Kurnool",
  "402": "National Institute of Foundry &amp; Forge Technology, Hatia, Ranchi",
  "403": "Sant Longowal Institute of Engineering and Technology",
  "404": "School of Planning &amp; Architecture: Vijayawada",
  "405":
    "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah",
  "406": "Central University of Rajasthan",
  "407": "Punjab Engineering College, Chandigarh",
  "408":
    "National Institute of Electronics and Information Technology, Aurangabad ",
  "413": "School of Planning and Architecture, Bhopal",
  "416": "Shri Mata Vaishno Devi University, Katra",
  "418": "Central Institute of Technology, Kokrajhar",
  "421": "University of Hyderabad"
};
const codes2 = [
  {
    key: "201",
    value: "Dr. B R Ambedkar National Institute of Technology, Jalandhar",
  },
  {
    key: "202",
    value: "Malaviya National Institute of Technology Jaipur",
  },
  {
    key: "203",
    value: "Maulana Azad National Institute of Technology Bhopal",
  },
  {
    key: "204",
    value: "Motilal Nehru National Institute of Technology Allahabad",
  },
  { key: "205", value: "National Institute of Technology  Agartala" },
  { key: "206", value: "National Institute of Technology Calicut" },
  { key: "207", value: "National Institute of Technology Delhi" },
  { key: "208", value: "National Institute of Technology Durgapur" },
  { key: "209", value: "National Institute of Technology Goa" },
  { key: "210", value: "National Institute of Technology Hamirpur" },
  {
    key: "211",
    value: "National Institute of Technology Karnataka, Surathkal",
  },
  { key: "212", value: "National Institute of Technology Meghalaya" },
  { key: "213", value: "National Institute of Technology Nagaland" },
  { key: "214", value: "National Institute of Technology Patna" },
  { key: "215", value: "National Institute of Technology Puducherry" },
  { key: "216", value: "National Institute of Technology Raipur" },
  { key: "217", value: "National Institute of Technology Sikkim" },
  {
    key: "218",
    value: "National Institute of Technology Arunachal Pradesh ",
  },
  { key: "219", value: "National Institute of Technology, Jamshedpur" },
  {
    key: "220",
    value: "National Institute of Technology, Kurukshetra",
  },
  { key: "221", value: "National Institute of Technology, Manipur" },
  { key: "222", value: "National Institute of Technology, Rourkela" },
  { key: "223", value: "National Institute of Technology, Silchar" },
  { key: "224", value: "National Institute of Technology, Srinagar" },
  {
    key: "225",
    value: "National Institute of Technology, Tiruchirappalli",
  },
  { key: "226", value: "National Institute of Technology, Warangal" },
  {
    key: "227",
    value: "Sardar Vallabhbhai National Institute of Technology, Surat",
  },
  {
    key: "228",
    value: "Visvesvaraya National Institute of Technology, Nagpur",
  },
  { key: "229", value: "National Institute of Technology Uttarakhand" },
  { key: "230", value: "National Institute of Technology Mizoram" },
  {
    key: "231",
    value: "National Institute of Technology, Andhra Pradesh",
  },
  {
    key: "301",
    value:
      "Atal Bihari Vajpayee Indian Institute of Information Technology &amp; Management Gwalior",
  },
  {
    key: "302",
    value: "Indian Institute of Information Technology, Allahabad",
  },
  {
    key: "303",
    value:
      "Indian Institute of Information Technology, Design &amp; Manufacturing Kancheepuram, Chennai",
  },
  {
    key: "304",
    value:
      "Pt. Dwarka Prasad Mishra Indian Institute of Information Technology, Design &amp; Manufacture Jabalpur",
  },
  {
    key: "308",
    value: "Indian Institute of Information Technology Vadodara",
  },
  {
    key: "309",
    value: "International Institute of Information Technology, Bhubaneswar",
  },
  {
    key: "310",
    value: "Indian Institute of Information Technology, Lucknow",
  },
  {
    key: "311",
    value: "Indian Institute of Information Technology, Pune",
  },
  {
    key: "317",
    value:
      "Indian Institute of Information Technology, Design and Manufacturing, Kurnool",
  },
  {
    key: "402",
    value:
      "National Institute of Foundry &amp; Forge Technology, Hatia, Ranchi",
  },
  {
    key: "403",
    value: "Sant Longowal Institute of Engineering and Technology",
  },
  {
    key: "404",
    value: "School of Planning &amp; Architecture: Vijayawada",
  },
  {
    key: "405",
    value:
      "Indian Institute of Engineering Science and Technology, Shibpur, District Howrah",
  },
  { key: "406", value: "Central University of Rajasthan" },
  { key: "407", value: "Punjab Engineering College, Chandigarh" },
  {
    key: "408",
    value:
      "National Institute of Electronics and Information Technology, Aurangabad ",
  },
  { key: "413", value: "School of Planning and Architecture, Bhopal" },
  { key: "416", value: "Shri Mata Vaishno Devi University, Katra" },
  { key: "418", value: "Central Institute of Technology, Kokrajhar" },
  { key: "421", value: "University of Hyderabad" },
];

const finalData = [];

const promises = Object.keys(codes).map((c) => {
  return fetch(
    "https://ccmt.nic.in/ccmtregistration/report/institutewiseallotment.aspx?boardid=105012021",
    {
      headers: {
        accept:
          "text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,*/*;q=0.8,application/signed-exchange;v=b3;q=0.9",
        "accept-language": "en-GB,en-US;q=0.9,en;q=0.8",
        "cache-control": "max-age=0",
        "content-type": "application/x-www-form-urlencoded",
        "sec-fetch-dest": "empty",
        "sec-fetch-mode": "cors",
        "sec-fetch-site": "same-origin",
        "upgrade-insecure-requests": "1",
        cookie:
          "Lang=P; ASPSESSIONIDAGCQBQTB=KLIOCEDCGHAOLELGKDMMMJOC; ASP.NET_SessionId=gyuox1p4tjo3kvhgxurp1ans; SecKeyCand=5E6EF8E8B27362A0E1EF137A02A6303B; auth=C5DA5D097ECC517A458B4844D8B5CA38B53920C66EDF9F520FD0F7D4A94EC0804F561256646F62C80BF60B6AF8020730B51DCD647D58E5D71E2EC0D43A1E522D2043ED36189F3599046DBEF0A216FE989546048F4DB14A61E14A4C36C2780DB8718B796BD9A9F2F54BAC2B5D9861F4CCAEE8CBE23FB6AE03E903AAD5D004A319D4D90A7BFCFF86FF7C2659D1BC0F1331C40E3539; ASPSESSIONIDSURDBSTD=AHEMOPJCBLPNDGPKONGEHEHM; ASPSESSIONIDAEDSBQSB=FJGGBAADFKAGLKNMHNGFIKNC",
      },
      referrer:
        "https://ccmt.nic.in/ccmtregistration/report/institutewiseallotment.aspx?boardid=105012021",
      referrerPolicy: "no-referrer-when-downgrade",
      body: `${prefix}${c}&${payload}`,
      method: "POST",
      mode: "cors",
    }
  )
    .then((res) => res.text())
    .then((res) => {
      return new Promise((resolve, reject) => {
        resolve({ data: res, code: c });
      });
    });
});

const cols = [
  "S.N.",
  "Programme",
  "GATE Registration Id",
  "Candidate Category",
  "GATE Score",
  "Group Id",
  "Allotted Seat Type",
];

function handlePromise(data, code) {
  const start = data.indexOf("<table");
  const end = data.indexOf("</table");
  const str = data.substring(start, end).replace(/\s/g, "");
  const strings = str.split(/\<tr/g);

  const temp = strings.reduce((acc, i) => {
    const record = i.split(/\<td/g).reduce((acc, j, key) => {
      if (key < 2) return acc;
      acc[cols[key - 1]] = j.substring(1, j.indexOf("<"));
      return acc;
    }, {});

    const parsedRecord = parseRecord(record);
    if (
      isEmpty(parsedRecord) ||
      typeof parsedRecord["category"] === "undefined" ||
      typeof parsedRecord["score"] === "undefined"
    )
      return acc;

    if (isEmpty(acc[codes[code]])) acc[codes[code]] = {}; // new college found

    if (isEmpty(acc[codes[code]][record["Programme"]])) {
      acc[codes[code]][record["Programme"]] = {
        [parsedRecord["category"]]: parsedRecord,
      }; // new course found
      return acc;
    }

    if (
      isEmpty(acc[codes[code]][record["Programme"]][parsedRecord["category"]])
    ) {
      acc[codes[code]][record["Programme"]][
        parsedRecord["category"]
      ] = parsedRecord; // new category found
      return acc;
    }

    // if (
    //   !acc[codes[code]][record["Programme"]][parsedRecord["category"]][
    //     "category"
    //   ]
    // ) {
    //   acc[codes[code]][record["Programme"]][parsedRecord["category"]][
    //     "category"
    //   ] = parsedRecord;
    //   return;
    // }

    if (
      acc[codes[code]][record["Programme"]][parsedRecord["category"]][
        "category"
      ] === parsedRecord["category"]
    ) {
      acc[codes[code]][record["Programme"]][parsedRecord["category"]] =
        parseInt(
          acc[codes[code]][record["Programme"]][parsedRecord["category"]][
            "score"
          ]
        ) < parseInt(parsedRecord["score"])
          ? acc[codes[code]][record["Programme"]][parsedRecord["category"]]
          : parsedRecord;
    }
    return acc;
  }, {});

  return temp;
}

Promise.all(promises).then((p) => {
  p.forEach((i) => {
    finalData.push(handlePromise(i.data, i.code));
  });

  saveData();
});

function parseRecord(rec) {
  return {
    category: rec["Allotted Seat Type"],
    score: rec["GATE Score"],
  };
}

function saveData() {
  fs.writeFile(
    "./college-wise-cutoff.json",
    JSON.stringify(finalData),
    function (err) {
      if (err) {
        return console.log(err);
      }
      console.log("The file was saved!");
    }
  );
}

function isEmpty(obj) {
  return typeof obj === "undefined" || Object.keys(obj).length === 0;
}
