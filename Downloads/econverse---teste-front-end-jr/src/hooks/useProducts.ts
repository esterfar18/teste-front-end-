import { useState, useEffect } from 'react';
import { Product, ProductsResponse } from '../types/product';

const REMOTE_API_URL = 'https://app.econverse.com.br/teste-front-end/junior/tecnologia/fotos-produtos/produtos.json';
const LOCAL_API_URL = '/produtos.json';

export function useProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let isMounted = true;

    async function fetchProducts() {
      setLoading(true);
      setError(null);

      // Try remote first, fallback to local file
      try {
        const response = await fetch(REMOTE_API_URL, { mode: 'cors' });
        if (!response.ok) throw new Error('Remote fetch failed');
        const data: ProductsResponse = await response.json();
        if (data && data.success && Array.isArray(data.products)) {
          if (isMounted) {
            setProducts(data.products);
            setLoading(false);
            return;
          }
        }
      } catch {
        // Fallback to local produtos.json
        try {
          const localResponse = await fetch(LOCAL_API_URL);
          if (!localResponse.ok) throw new Error('Local fetch failed');
          const localData: ProductsResponse = await localResponse.json();
          if (localData && localData.success && Array.isArray(localData.products)) {
            if (isMounted) {
              setProducts(localData.products);
              setLoading(false);
              return;
            }
          }
        } catch (localErr: unknown) {
          if (isMounted) {
            const message = localErr instanceof Error ? localErr.message : 'Erro ao carregar produtos';
            setError(message);
            setLoading(false);
          }
        }
      }
    }

    fetchProducts();

    return () => {
      isMounted = false;
    };
  }, []);

  return { products, loading, error };
}
