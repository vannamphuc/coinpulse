import DataTable from "../DataTable";

const CoinOverviewFallback = () => {
  return (
    <div id="coin-overview-fallback">
      <div className="header">
        <div className="header-image skeleton" />
        <div className="info">
          <div className="header-line-sm skeleton" />
          <div className="header-line-lg skeleton" />
        </div>
      </div>
    </div>
  );
};

const TrendingCoinsFallback = () => {
  const skeletonData = Array.from({ length: 6 }, (_, i) => ({ id: i }));

  const columns: DataTableColumn<{ id: number }>[] = [
    {
      header: "Name",
      cellClassName: "name-cell",
      cell: () => (
        <div className="name-link">
          <div className="name-image skeleton coin-skeleton" />
          <div className="name-line skeleton" />
        </div>
      ),
    },
    {
      header: "24h Change",
      cellClassName: "change-cell",
      cell: () => (
        <div className="price-change">
          <div className="change-icon skeleton" />
          <div className="change-line skeleton" />
        </div>
      ),
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: () => <div className="price-line skeleton" />,
    },
  ];

  return (
    <div id="trending-coins-fallback">
      <h4>Trending Coin</h4>
      <DataTable
        data={skeletonData}
        columns={columns}
        rowKey={(item) => item.id}
        tableClassName="trending-coins-table"
        headerCellClassName="py-3!"
        bodyCellClassName="py-2!"
      />
    </div>
  );
};

const CategoriesFallback = () => {
  const skeletonData = Array.from({ length: 10 }, (_, i) => ({ id: i }));

  const columns: DataTableColumn<{ id: number }>[] = [
    {
      header: "Category",
      cellClassName: "category-cell",
      cell: () => <div className="category-skeleton skeleton" />,
    },
    {
      header: "Top Gainers",
      cellClassName: "top-gainers-cell",
      cell: () => (
        <>
          <div className="coin-skeleton skeleton" />
          <div className="coin-skeleton skeleton" />
          <div className="coin-skeleton skeleton" />
        </>
      ),
    },
    {
      header: "24h Change",
      cellClassName: "change-header-cell",
      cell: () => (
        <div className="change-cell">
          <div className="change-icon skeleton" />
          <div className="value-skeleton-sm skeleton" />
        </div>
      ),
    },
    {
      header: "Market Cap",
      cellClassName: "market-cap-cell",
      cell: () => <div className="value-skeleton-lg skeleton" />,
    },
  ];

  return (
    <div id="categories-fallback" className="custom-scrollbar">
      <h4>Top Categories</h4>
      <DataTable
        columns={columns}
        data={skeletonData}
        rowKey={(item) => item.id}
        tableClassName="mt-3"
      />
    </div>
  );
};

const CoinsFallback = () => {
  const skeletonData = Array.from({ length: 10 }, (_, i) => ({ id: i }));

  const columns: DataTableColumn<{ id: number }>[] = [
    {
      header: "Rank",
      cellClassName: "rank-cell",
      cell: () => <div className="h-4 w-8 skeleton" />,
    },
    {
      header: "Token",
      cellClassName: "token-cell",
      cell: () => (
        <div className="flex items-center gap-3">
          <div className="size-9 rounded-full skeleton" />
          <div className="h-4 w-32 skeleton" />
        </div>
      ),
    },
    {
      header: "Price",
      cellClassName: "price-cell",
      cell: () => <div className="h-4 w-20 skeleton" />,
    },
    {
      header: "24h Change",
      cellClassName: "change-cell",
      cell: () => <div className="h-4 w-16 skeleton" />,
    },
    {
      header: "Market Cap",
      cellClassName: "market-cap-cell",
      cell: () => <div className="h-4 w-24 skeleton" />,
    },
  ];

  return (
    <>
      <DataTable
        tableClassName="coins-table"
        columns={columns}
        data={skeletonData}
        rowKey={(item) => item.id}
      />
      <div className="h-10 w-full skeleton rounded-sm mt-5" />
    </>
  );
};

export { CoinOverviewFallback, TrendingCoinsFallback, CategoriesFallback, CoinsFallback };
