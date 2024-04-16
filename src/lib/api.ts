export const getSummaryStats = () => {
  return Promise.resolve({
    promotions: 427,
    categories: 8,
    newCompanies: 28,
    activeCompanies: 670,
  });
};

export const getSummarySales = () => {
  const items = [];

  for (let i = 0; i < 6; i++) {
    items.push({
      companyId: i + 1,
      companyTitle: 'Company title',
      sold: 459,
      income: 600,
    });
  }

  return Promise.resolve(items);
};

export const getSummaryPromotions = () => {
  const items = [];

  for (let i = 0; i < 7; i++) {
    items.push({
      promotionId: i + 1,
      promotionName: 'Promotion name',
      companyTitle: 'Company title',
      discount: 40,
    });
  }

  return Promise.resolve(items);
};

export const getSummaryCategories = () => {
  return Promise.resolve([
    {
      categoryId: 1,
      categoryTitle: 'Products',
      count: 4,
    },
    {
      categoryId: 2,
      categoryTitle: 'Products',
      count: 8,
    },
    {
      categoryId: 3,
      categoryTitle: 'Products',
      count: 12,
    },
    {
      categoryId: 4,
      categoryTitle: 'Products',
      count: 16,
    },
    {
      categoryId: 5,
      categoryTitle: 'Products',
      count: 20,
    },
    {
      categoryId: 6,
      categoryTitle: 'Products',
      count: 24,
    },
    {
      categoryId: 7,
      categoryTitle: 'Products',
      count: 28,
    },
    {
      categoryId: 8,
      categoryTitle: 'Products',
      count: 32,
    },
  ]);
};

export const getSummaryCountries = () => {
  return Promise.resolve([
    {
      countryId: 1,
      countryTitle: 'Canada',
      count: 4,
    },
    {
      countryId: 2,
      countryTitle: 'Ukraine',
      count: 3,
    },
    {
      countryId: 3,
      countryTitle: 'USA',
      count: 6,
    },
    {
      countryId: 4,
      countryTitle: 'Poland',
      count: 9,
    },
    {
      countryId: 5,
      countryTitle: 'Spain',
      count: 7,
    },
  ]);
};
