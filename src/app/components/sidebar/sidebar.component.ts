import { Component, Input, OnInit } from "@angular/core";

export class Menu {
  errors: [];
  isSuccess: boolean;
  menu: MenuItem[];

  constructor(errors: [], isSuccess: boolean, menu: MenuItem[]) {
    this.errors = errors;
    this.isSuccess = isSuccess;
    this.menu = menu;
  }
}

export interface MenuItem {
  active: boolean;
  description: string;
  functionId: string;
  icon: string;
  nodeId: string;
  parentId: string;
  position: string;
  url: string;
  sub: MenuItem[];
}

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"],
})
export class SidebarComponent implements OnInit {
  @Input() sidebarCollapsed: boolean = false;
  loading = false;
  sub: any[] = [];
  errors: [] = [];
  isSuccess: boolean = false;
  menu: MenuItem[] = [];

  menusObj = new Menu([], false, []);

  ngOnInit(): void {
    let result: any = {
      errors: [],
      isSuccess: true,
      menu: [
        {
          nodeId: "12",
          parentId: "0",
          description: "Admin panel",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "79",
          parentId: "0",
          description: "Kredit və Girov məbləğinin artırılması",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "61",
          parentId: "0",
          description: "Hesablar arası müxabirləşmə",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "32",
          parentId: "0",
          description: "E-Məhkəmə",
          url: "",
          icon: "",
          position: "",
          functionId: "ecourt",
        },
        {
          nodeId: "48",
          parentId: "0",
          description: "XalqOnline",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "54",
          parentId: "0",
          description: "Plastik kart limitlərinin idarə edilməsi",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "4",
          parentId: "0",
          description: "MKR",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "11",
          parentId: "0",
          description: "Kredit sifarişi",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "66",
          parentId: "0",
          description: "Arxiv kassa sənədlərinin çapı",
          url: "",
          icon: "",
          position: "",
          functionId: "archivepreparer",
        },
        {
          nodeId: "44",
          parentId: "0",
          description: "POS terminal üzrə sənədlərin çapı",
          url: "",
          icon: "",
          position: "",
          functionId: "posterminalpreparer",
        },
        {
          nodeId: "8",
          parentId: "0",
          description: "Lotoreya import",
          url: "",
          icon: "",
          position: "",
          functionId: "lotteryimport",
        },
        {
          nodeId: "20",
          parentId: "0",
          description: "Müxabirləşmələrin silinməsi",
          url: "",
          icon: "",
          position: "",
          functionId: "deletionofoperations",
        },
        {
          nodeId: "22",
          parentId: "0",
          description: "SIF kreditlər üzrə müraciətlər",
          url: "",
          icon: "",
          position: "",
          functionId: "sifloansrequests",
        },
        {
          nodeId: "80",
          parentId: "0",
          description: "Şəhadətnamə-dublikatlar",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "43",
          parentId: "0",
          description: "Müxbir banklar üzrə xidmət haqqının bölünməsi",
          url: "",
          icon: "",
          position: "",
          functionId: "correspondent",
        },
        {
          nodeId: "30",
          parentId: "0",
          description: "AZİPS-in V-shape",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "38",
          parentId: "0",
          description: "Onlayn kart sifarişi",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "39",
          parentId: "0",
          description: "AKB - ÇIXARIŞ",
          url: "",
          icon: "",
          position: "",
          functionId: "akb",
        },
        {
          nodeId: "23",
          parentId: "0",
          description: "Müştəri axtarışı və redaktəsi",
          url: "",
          icon: "",
          position: "",
          functionId: "customer",
        },
        {
          nodeId: "17",
          parentId: "0",
          description: "Plastik kartlar",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "31",
          parentId: "0",
          description: "TX kart sifarişlərin çapı",
          url: "",
          icon: "",
          position: "",
          functionId: "cardorderspreparer",
        },
        {
          nodeId: "19",
          parentId: "0",
          description: "Hesabatlar",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "26",
          parentId: "0",
          description: "İPS ödənişlər",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "77",
          parentId: "0",
          description: "E-Link",
          url: "",
          icon: "",
          position: "",
          functionId: "elink",
        },
        {
          nodeId: "82",
          parentId: "0",
          description: "kredit ve girov artirilma",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "56",
          parentId: "0",
          description: "CL Ödənişlər batch yükləmə",
          url: "",
          icon: "",
          position: "",
          functionId: "extraaccruedinterest",
        },
        {
          nodeId: "47",
          parentId: "0",
          description: "Elektron kassa",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "64",
          parentId: "0",
          description: "Visa B2B",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "74",
          parentId: "0",
          description: "Cari hesabın açılması",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "24",
          parentId: "0",
          description: "Hesab yarat",
          url: "",
          icon: "",
          position: "",
          functionId: "createaccount",
        },
        {
          nodeId: "69",
          parentId: "0",
          description: "Xarici valyutanın nağd satışına dair anket",
          url: "",
          icon: "",
          position: "",
          functionId: "foreigncurrencycashsale",
        },
        {
          nodeId: "45",
          parentId: "0",
          description: "Əmək haqqı üzrə sənədlərin çapı",
          url: "",
          icon: "",
          position: "",
          functionId: "salarycontractspreparer",
        },
        {
          nodeId: "57",
          parentId: "0",
          description: "XÖHKS portal",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "25",
          parentId: "0",
          description: "Karta mədaxil",
          url: "",
          icon: "",
          position: "",
          functionId: "cardincome",
        },
        {
          nodeId: "81",
          parentId: "0",
          description: "Bildiriş",
          url: "",
          icon: "",
          position: "",
          functionId: "pushnotifications",
        },
        {
          nodeId: "40",
          parentId: "0",
          description: "HÖP üzrə Daxili Portal",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "63",
          parentId: "0",
          description: "Girov məbləğinin yenilənməsi",
          url: "",
          icon: "",
          position: "",
          functionId: "modifycollateralupdate",
        },
        {
          nodeId: "6",
          parentId: "4",
          description: "XMLin validasiyasi",
          url: "",
          icon: "",
          position: "",
          functionId: "MKRXMLVALID",
        },
        {
          nodeId: "5",
          parentId: "4",
          description: "XMLin hazirlanmasi",
          url: "",
          icon: "",
          position: "",
          functionId: "MKRXMLGEN",
        },
        {
          nodeId: "15",
          parentId: "11",
          description: "Hüquqi şəxslər",
          url: "",
          icon: "",
          position: "",
          functionId: "corporateloanorder",
        },
        {
          nodeId: "14",
          parentId: "11",
          description: "Fiziki şəxslər",
          url: "",
          icon: "",
          position: "",
          functionId: "loanorder",
        },
        {
          nodeId: "16",
          parentId: "11",
          description: "Fiziki şəxs sahibkar",
          url: "",
          icon: "",
          position: "",
          functionId: "individualownerloanorder",
        },
        {
          nodeId: "13",
          parentId: "12",
          description: "Kredit girov tənzimləmələri",
          url: "",
          icon: "",
          position: "",
          functionId: "admloanordermortgage",
        },
        {
          nodeId: "7",
          parentId: "17",
          description: "Kart Sifarişi",
          url: "",
          icon: "",
          position: "",
          functionId: "cardorder",
        },
        {
          nodeId: "18",
          parentId: "17",
          description: "Kütləvi əməliyyat yüklənilməsi",
          url: "",
          icon: "",
          position: "",
          functionId: "cardtransactionsupload",
        },
        {
          nodeId: "21",
          parentId: "19",
          description: "Müxabirləşmə monitorinqi",
          url: "",
          icon: "",
          position: "",
          functionId: "monitorinqtransactions",
        },
        {
          nodeId: "29",
          parentId: "26",
          description: "İdarəetmə sistemi",
          url: "",
          icon: "",
          position: "",
          functionId: "anipaymanagement",
        },
        {
          nodeId: "28",
          parentId: "26",
          description: "IPS Ödənişin yığılması",
          url: "",
          icon: "",
          position: "",
          functionId: "anipaypayment",
        },
        {
          nodeId: "27",
          parentId: "26",
          description: "Müştərinin qeydiyyatı",
          url: "",
          icon: "",
          position: "",
          functionId: "anipay",
        },
        {
          nodeId: "33",
          parentId: "30",
          description: "V-shape idarəetmə",
          url: "",
          icon: "",
          position: "",
          functionId: "vshapeadmin",
        },
        {
          nodeId: "34",
          parentId: "30",
          description: "AZİPS-V-shape",
          url: "",
          icon: "",
          position: "",
          functionId: "vshape",
        },
        {
          nodeId: "51",
          parentId: "38",
          description: "Kart sifarişi",
          url: "",
          icon: "",
          position: "",
          functionId: "onlinecardorder",
        },
        {
          nodeId: "73",
          parentId: "38",
          description: "Onlayn kart sifarişi  Korporativ",
          url: "",
          icon: "",
          position: "",
          functionId: "corporatecardorder",
        },
        {
          nodeId: "52",
          parentId: "38",
          description: "Onlayn kart İdarəetmə paneli",
          url: "",
          icon: "",
          position: "",
          functionId: "onlinecardordermanagement",
        },
        {
          nodeId: "46",
          parentId: "40",
          description: "HÖP Əməliyyat tarixçəsi",
          url: "",
          icon: "",
          position: "",
          functionId: "hophistory",
        },
        {
          nodeId: "42",
          parentId: "40",
          description: "HÖP idarəetmə paneli",
          url: "",
          icon: "",
          position: "",
          functionId: "hopmanagement",
        },
        {
          nodeId: "41",
          parentId: "40",
          description: "HÖP Yeni ödəniş",
          url: "",
          icon: "",
          position: "",
          functionId: "hoppayment",
        },
        {
          nodeId: "50",
          parentId: "47",
          description: "Elektron kassa kitabı",
          url: "",
          icon: "",
          position: "",
          functionId: "ecashbook",
        },
        {
          nodeId: "53",
          parentId: "47",
          description: "Elektron kassa tarixçə",
          url: "",
          icon: "",
          position: "",
          functionId: "ecashbookhistory",
        },
        {
          nodeId: "49",
          parentId: "48",
          description: "XalqOnline idarəetmə",
          url: "",
          icon: "",
          position: "",
          functionId: "xalqonlinemanagment",
        },
        {
          nodeId: "55",
          parentId: "54",
          description: "Kart limitinin idarə olunması",
          url: "",
          icon: "",
          position: "",
          functionId: "cardusagemanagementhome",
        },
        {
          nodeId: "58",
          parentId: "57",
          description: "XÖHKS",
          url: "",
          icon: "",
          position: "",
          functionId: "xohks",
        },
        {
          nodeId: "70",
          parentId: "61",
          description: "Hesabdan Hesaba köçürmə",
          url: "",
          icon: "",
          position: "",
          functionId: "acc2acc",
        },
        {
          nodeId: "68",
          parentId: "61",
          description: "Kart Hesabından məxaric",
          url: "",
          icon: "",
          position: "",
          functionId: "cardaccountoutlay",
        },
        {
          nodeId: "71",
          parentId: "61",
          description: "Müxabirləşmə tarixçə",
          url: "",
          icon: "",
          position: "",
          functionId: "correspondencehistory",
        },
        {
          nodeId: "62",
          parentId: "61",
          description: "Kart Hesabına mədaxil",
          url: "",
          icon: "",
          position: "",
          functionId: "cardaccountincome",
        },
        {
          nodeId: "65",
          parentId: "64",
          description: "İdarə etmə ",
          url: "",
          icon: "",
          position: "",
          functionId: "visab2bmanagement",
        },
        {
          nodeId: "60",
          parentId: "64",
          description: "Visa B2B Əməliyyat",
          url: "",
          icon: "",
          position: "",
          functionId: "visab2b",
        },
        {
          nodeId: "75",
          parentId: "74",
          description: "Cari hesabın açılması Fiziki şəxs",
          url: "",
          icon: "",
          position: "",
          functionId: "individualcurrentaccount",
        },
        {
          nodeId: "76",
          parentId: "74",
          description: "Cari hesabın açılması Hüquqi şəxs",
          url: "",
          icon: "",
          position: "",
          functionId: "currentaccountcorporate",
        },
        {
          nodeId: "67",
          parentId: "79",
          description: "Həyat yığım idarəetmə",
          url: "",
          icon: "",
          position: "",
          functionId: "modifycollateralamountadmin",
        },
        {
          nodeId: "59",
          parentId: "79",
          description: "Girov məbləğinin artırılması",
          url: "",
          icon: "",
          position: "",
          functionId: "modifycollateralamount",
        },
        {
          nodeId: "84",
          parentId: "82",
          description: "heyat yigim ",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "83",
          parentId: "82",
          description: "girov idareetme",
          url: "",
          icon: "",
          position: "",
          functionId: "",
        },
        {
          nodeId: "86",
          parentId: "83",
          description: "girov idare etme",
          url: "",
          icon: "",
          position: "",
          functionId: "modifycollateralamountv2admin",
        },
        {
          nodeId: "85",
          parentId: "83",
          description: "girov artirilma",
          url: "",
          icon: "",
          position: "",
          functionId: "modifycollateralamountv2home",
        },
        {
          nodeId: "88",
          parentId: "84",
          description: "heyat yigim sigorta kredit artirilma",
          url: "",
          icon: "",
          position: "",
          functionId: "modifycollateralamounthome",
        },
        {
          nodeId: "87",
          parentId: "84",
          description: "heyat yigim emeliyyat tarixce ",
          url: "",
          icon: "",
          position: "",
          functionId: "modifycollateralamounthistory",
        },
      ],
    };
    console.log(result.menu);

    this.menu = [];
    this.errors = result.errors;
    this.isSuccess = result.isSuccess;
    if (this.isSuccess) {
      let mObj = <Menu>{};
      mObj.errors = this.errors;
      mObj.isSuccess = this.isSuccess;
      mObj.menu = this.groupSidebarItems(result.menu);
      this.menusObj = mObj;
      console.log(this.menusObj);
    }
  }
  groupSidebarItems(items: MenuItem[], parentId: string = "0"): MenuItem[] {
    const groupedItems: MenuItem[] = [];

    for (const item of items) {
      if (item.parentId === parentId) {
        const children = this.groupSidebarItems(items, item.nodeId);
        if (children.length > 0) {
          item.sub = children;
        }
        groupedItems.push(item);
      }
    }

    return groupedItems;
  }
  // SubMenus(menus: Menu, currentMenu: MenuItem): any {
  //   menus.menu.forEach((menuItem) => {
  //     if (currentMenu.nodeId === menuItem.parentId) {
  //       this.sub.push(menuItem);
  //     }
  //   });

  //   return this.sub;
  // }
  toggleSidebar() {
    console.log("yes yes yes shibidi");
  }
}
