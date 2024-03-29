import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { NgxGalleryAnimation } from '@kolkov/ngx-gallery';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { ApiService } from 'src/app/services/api.service';
import { environment } from '../../../environments/environment';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-one-product',
  templateUrl: './one-product.component.html',
  styleUrls: ['./one-product.component.scss'],
})
export class OneProductComponent implements OnInit {
  galleryOptions!: NgxGalleryOptions[];
  galleryImages: any[] = [];
  product: any;
  env = environment;
  allProducts: any;
  code: any;
  description: any;
  material: any;
  care: any;
  modelSize: any;
  modelHeight: any;
  user_id: any;
  token: any;
  msg: any;
  cartMsg: any;

  customOptions: OwlOptions = {
    loop: true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: false,
    navSpeed: 700,
    navText: [
      '<i class="fa fa-chevron-left"></i>',
      '<i class="fa fa-chevron-right"></i>',
    ],
    responsive: {
      0: {
        items: 1,
      },
      400: {
        items: 2,
      },
      740: {
        items: 3,
      },
      940: {
        items: 4,
      },
    },
    nav: true,
  };
  // related_images: any[] = [
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LAVA220512_3_360x.jpg?v=1652430392',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LA_SPRING22_ECOM_106683_360x.jpg?v=1653067583',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LA_SPRING22_ECOM_112642_360x.jpg?v=1655711101',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LA_SPRING22_ECOM_109349_360x.jpg?v=1652870853',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LA_SPRING22_ECOM_108080_360x.jpg?v=1647259059',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LA_SPRING22_ECOM_107519_360x.jpg?v=1647267635',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LA_SPRING22_ECOM_107365_360x.jpg?v=1648735575',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LAVA220512_3_360x.jpg?v=1652430392',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LA_SPRING22_ECOM_106683_360x.jpg?v=1653067583',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LA_SPRING22_ECOM_112642_360x.jpg?v=1655711101',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LA_SPRING22_ECOM_109349_360x.jpg?v=1652870853',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  //   {
  //     path: 'https://cdn.shopify.com/s/files/1/2722/8634/products/LA_SPRING22_ECOM_108080_360x.jpg?v=1647259059',
  //     content: 'High Waist Tapered Trouser In Spring Green',
  //     price: 'Rs. 10,100.00',
  //   },
  // ];
  constructor(
    private api: ApiService,
    private acRoute: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {
    this.acRoute.params.subscribe((param) => {
      console.log('param=>', param['id']);
      let _id = param['id'];
      this.getProduct(_id);
    });

    this.api.Userloggedin().subscribe({
      next: (res) => {
        this.user_id = res.data._id;
        console.log('this.user_id', this.user_id);
      },
      error: (error) => {
        console.log('error', error);
      },
    });

    this.galleryOptions = [
      {
        width: '600px',
        height: '1200px',
        // width: '600px',
        // height: '400px',
        thumbnailsColumns: 4,
        arrowPrevIcon: 'fa fa-chevron-left',
        arrowNextIcon: 'fa fa-chevron-right',
        imageAnimation: NgxGalleryAnimation.Slide,
      },
      // max-width 800
      {
        breakpoint: 800,
        width: '100%',
        height: '600px',
        imagePercent: 80,
        thumbnailsPercent: 20,
        thumbnailsMargin: 20,
        thumbnailMargin: 20,
      },
      // max-width 400
      {
        breakpoint: 400,
        preview: false,
      },
    ];

    this.getAllProducts();
  }

  getProduct(_id: any) {
    // let _id = this.acRoute.snapshot.params['id'];
    this.api.GetOneProduct(_id).subscribe({
      next: (res) => {
        this.product = res.data;
        this.code = this.product.code;
        this.description = this.product.description;
        this.material = this.product.material;
        this.care = this.product.care;
        this.modelSize = this.product.modelSize;
        this.modelHeight = this.product.modelHeight;

        console.log("product =>",this.product);
        this.product.images.map((i: any) => {
          this.galleryImages.push({
            small: this.env.apiUrl + 'product_images/' + i.name,
            medium: this.env.apiUrl + 'product_images/' + i.name,
            big: this.env.apiUrl + 'product_images/' + i.name,
          });
        });
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

  btnRelated_product(_id: any) {
    this.router.navigate(['/product', _id]);
  }
  getAllProducts() {
    this.api.getProducts().subscribe({
      next: (res) => {
        this.allProducts = res.data;
      },
      error: (error) => {
        console.log('error', error);
      },
    });
  }

  //wishlist
  btnWishList() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      let product_id = this.acRoute.snapshot.params['id'];
      const Obj = { user_id: this.user_id, product_id: product_id };
      this.api.addWishList(Obj).subscribe({
        next: (res) => {
          console.log('res', res.success);
          if (res.success == false) {
            this.toastr.info('Already added this product to wish list', '', {
              timeOut: 2000,
            });
          } else {
            this.toastr.success(
              'Successfully Add this Product to your wishlist.',
              '',
              {
                timeOut: 2000,
              }
            );
            this.router.navigate(['wishlist']);
          }
        },
        error: (error) => {
          console.log('error', error);
        },
      });
    } else {
      this.msg = 'You should log in first, then add the item to your wishlist.';
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 2500);
    }
  }

  btnAddBag() {
    this.token = localStorage.getItem('token');
    if (this.token) {
      let product_id = this.acRoute.snapshot.params['id'];
      const Obj = { user_id: this.user_id, product_id: product_id };
      this.api.addCart(Obj).subscribe({
        next: (res) => {
          console.log('res', res);
          this.toastr.success(
            'Successfully Add this Product to your Cart.',
            '',
            {
              timeOut: 2000,
            }
          );
          this.router.navigate(['cart']);
        },
        error: (error) => {
          console.log('error', error);
        },
      });
    } else {
      this.cartMsg = 'You should log in first, then add the item to your bag.';
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 2500);
    }
  }
}
