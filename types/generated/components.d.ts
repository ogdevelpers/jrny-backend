import type { Schema, Struct } from '@strapi/strapi';

export interface HomeAbout extends Struct.ComponentSchema {
  collectionName: 'components_home_abouts';
  info: {
    displayName: 'About';
  };
  attributes: {
    CTA_Link: Schema.Attribute.String;
    CTA_Text: Schema.Attribute.String;
    Description: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomeHero extends Struct.ComponentSchema {
  collectionName: 'components_home_heroes';
  info: {
    displayName: 'Hero';
  };
  attributes: {
    Background_Image_Left: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios',
      true
    >;
    Background_Image_Right: Schema.Attribute.Media<
      'images' | 'files' | 'videos' | 'audios'
    >;
    CTALink: Schema.Attribute.String;
    CTAText: Schema.Attribute.String;
    ShowReelVideoLink: Schema.Attribute.String;
    Title: Schema.Attribute.String;
  };
}

export interface HomePartner extends Struct.ComponentSchema {
  collectionName: 'components_home_partners';
  info: {
    description: '';
    displayName: 'Partner';
  };
  attributes: {
    brands: Schema.Attribute.Relation<
      'oneToMany',
      'api::brand-logo.brand-logo'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomePortfolio extends Struct.ComponentSchema {
  collectionName: 'components_home_portfolios';
  info: {
    description: '';
    displayName: 'Portfolio';
  };
  attributes: {
    CTA_Link: Schema.Attribute.String;
    CTA_Text: Schema.Attribute.String;
    description: Schema.Attribute.String;
    portfolios: Schema.Attribute.Relation<
      'oneToMany',
      'api::portfolio.portfolio'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomeServices extends Struct.ComponentSchema {
  collectionName: 'components_home_services';
  info: {
    description: '';
    displayName: 'Service';
  };
  attributes: {
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    Title: Schema.Attribute.String;
  };
}

export interface HomeTestimonial extends Struct.ComponentSchema {
  collectionName: 'components_home_testimonials';
  info: {
    displayName: 'Testimonial';
  };
  attributes: {
    bgImage: Schema.Attribute.Media<'images' | 'files' | 'videos' | 'audios'>;
    subTitle: Schema.Attribute.String;
    testimonials: Schema.Attribute.Relation<
      'oneToMany',
      'api::testimonial.testimonial'
    >;
    title: Schema.Attribute.String;
  };
}

export interface HomeWhyJrny extends Struct.ComponentSchema {
  collectionName: 'components_home_why_jrnies';
  info: {
    description: '';
    displayName: 'Why_JRNY';
  };
  attributes: {
    description: Schema.Attribute.String;
    jrnies: Schema.Attribute.Relation<'oneToMany', 'api::why-jrny.why-jrny'>;
    title: Schema.Attribute.String;
  };
}

export interface SharedOpenGraph extends Struct.ComponentSchema {
  collectionName: 'components_shared_open_graphs';
  info: {
    displayName: 'openGraph';
    icon: 'project-diagram';
  };
  attributes: {
    ogDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 200;
      }>;
    ogImage: Schema.Attribute.Media<'images'>;
    ogTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 70;
      }>;
    ogType: Schema.Attribute.String;
    ogUrl: Schema.Attribute.String;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'seo';
    icon: 'search';
  };
  attributes: {
    canonicalURL: Schema.Attribute.String;
    keywords: Schema.Attribute.Text;
    metaDescription: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 160;
        minLength: 50;
      }>;
    metaImage: Schema.Attribute.Media<'images'>;
    metaRobots: Schema.Attribute.String;
    metaTitle: Schema.Attribute.String &
      Schema.Attribute.Required &
      Schema.Attribute.SetMinMaxLength<{
        maxLength: 60;
      }>;
    metaViewport: Schema.Attribute.String;
    structuredData: Schema.Attribute.JSON;
  };
}

export interface UtilForm extends Struct.ComponentSchema {
  collectionName: 'components_util_forms';
  info: {
    description: '';
    displayName: 'Form';
  };
  attributes: {
    Email: Schema.Attribute.Email;
    locations: Schema.Attribute.Relation<'oneToMany', 'api::location.location'>;
    PhoneNumber: Schema.Attribute.String;
    services: Schema.Attribute.Relation<'oneToMany', 'api::service.service'>;
    title: Schema.Attribute.String;
  };
}

export interface UtilLink extends Struct.ComponentSchema {
  collectionName: 'components_util_links';
  info: {
    displayName: 'Link';
  };
  attributes: {
    title: Schema.Attribute.String;
    url: Schema.Attribute.String;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'home.about': HomeAbout;
      'home.hero': HomeHero;
      'home.partner': HomePartner;
      'home.portfolio': HomePortfolio;
      'home.services': HomeServices;
      'home.testimonial': HomeTestimonial;
      'home.why-jrny': HomeWhyJrny;
      'shared.open-graph': SharedOpenGraph;
      'shared.seo': SharedSeo;
      'util.form': UtilForm;
      'util.link': UtilLink;
    }
  }
}
