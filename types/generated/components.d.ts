import type { Schema, Struct } from '@strapi/strapi';

export interface ProductDimensions extends Struct.ComponentSchema {
  collectionName: 'components_product_dimensions';
  info: {
    description: 'Physical dimensions of the product';
    displayName: 'Dimensions';
    icon: 'ruler';
  };
  attributes: {
    height: Schema.Attribute.Decimal;
    length: Schema.Attribute.Decimal;
    unit: Schema.Attribute.String & Schema.Attribute.DefaultTo<'cm'>;
    width: Schema.Attribute.Decimal;
  };
}

export interface ProductProductImage extends Struct.ComponentSchema {
  collectionName: 'components_product_product_images';
  info: {
    description: 'Image with metadata for products';
    displayName: 'Product Image';
    icon: 'picture';
  };
  attributes: {
    alt: Schema.Attribute.String;
    isPrimary: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<false>;
    media: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface ProductProductVariant extends Struct.ComponentSchema {
  collectionName: 'components_product_product_variants';
  info: {
    description: 'Product variation details';
    displayName: 'Product Variant';
    icon: 'layer-group';
  };
  attributes: {
    attributes: Schema.Attribute.JSON;
    compareAtPrice: Schema.Attribute.Decimal;
    images: Schema.Attribute.Component<'product.product-image', true>;
    inStock: Schema.Attribute.Boolean & Schema.Attribute.DefaultTo<true>;
    name: Schema.Attribute.String & Schema.Attribute.Required;
    price: Schema.Attribute.Decimal & Schema.Attribute.Required;
    sku: Schema.Attribute.String;
    stockQuantity: Schema.Attribute.Integer;
  };
}

export interface SharedMedia extends Struct.ComponentSchema {
  collectionName: 'components_shared_media';
  info: {
    displayName: 'Media';
    icon: 'file-video';
  };
  attributes: {
    file: Schema.Attribute.Media<'images' | 'files' | 'videos'>;
  };
}

export interface SharedQuote extends Struct.ComponentSchema {
  collectionName: 'components_shared_quotes';
  info: {
    displayName: 'Quote';
    icon: 'indent';
  };
  attributes: {
    body: Schema.Attribute.Text;
    title: Schema.Attribute.String;
  };
}

export interface SharedRichText extends Struct.ComponentSchema {
  collectionName: 'components_shared_rich_texts';
  info: {
    description: '';
    displayName: 'Rich text';
    icon: 'align-justify';
  };
  attributes: {
    body: Schema.Attribute.RichText;
  };
}

export interface SharedSeo extends Struct.ComponentSchema {
  collectionName: 'components_shared_seos';
  info: {
    description: '';
    displayName: 'Seo';
    icon: 'allergies';
    name: 'Seo';
  };
  attributes: {
    metaDescription: Schema.Attribute.Text & Schema.Attribute.Required;
    metaTitle: Schema.Attribute.String & Schema.Attribute.Required;
    shareImage: Schema.Attribute.Media<'images'>;
  };
}

export interface SharedSlider extends Struct.ComponentSchema {
  collectionName: 'components_shared_sliders';
  info: {
    description: '';
    displayName: 'Slider';
    icon: 'address-book';
  };
  attributes: {
    files: Schema.Attribute.Media<'images', true>;
  };
}

declare module '@strapi/strapi' {
  export module Public {
    export interface ComponentSchemas {
      'product.dimensions': ProductDimensions;
      'product.product-image': ProductProductImage;
      'product.product-variant': ProductProductVariant;
      'shared.media': SharedMedia;
      'shared.quote': SharedQuote;
      'shared.rich-text': SharedRichText;
      'shared.seo': SharedSeo;
      'shared.slider': SharedSlider;
    }
  }
}
