import { Filter } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { FilterOptions } from '@/interfaces/Cart/cart'

type FilterSectionProps = {
  filterOptions: FilterOptions
  setFilterOptions: React.Dispatch<React.SetStateAction<FilterOptions>>
  onApplyDateFilters: () => void
}

export default function FilterSection({ filterOptions, setFilterOptions, onApplyDateFilters }: FilterSectionProps) {
  return (
    <Card className="mb-8">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Filter className="w-6 h-6 mr-2" />
          Filtrar Carritos
        </CardTitle>
      </CardHeader>
      <CardContent>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de inicio
            </label>
            <Input
              type="date"
              id="startDate"
              value={filterOptions.startDate}
              onChange={(e) => setFilterOptions({ ...filterOptions, startDate: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-1">
              Fecha de fin
            </label>
            <Input
              type="date"
              id="endDate"
              value={filterOptions.endDate}
              onChange={(e) => setFilterOptions({ ...filterOptions, endDate: e.target.value })}
            />
          </div>
          <div>
            <label htmlFor="limit" className="block text-sm font-medium text-gray-700 mb-1">
              Límite
            </label>
            <Input
              type="number"
              id="limit"
              value={filterOptions.limit}
              onChange={(e) => setFilterOptions({ ...filterOptions, limit: e.target.value })}
              placeholder="Sin límite"
            />
          </div>
          <div>
            <label htmlFor="sort" className="block text-sm font-medium text-gray-700 mb-1">
              Ordenar
            </label>
            <Select
              value={filterOptions.sort}
              onValueChange={(value) => setFilterOptions({ ...filterOptions, sort: value as 'asc' | 'desc' })}
            >
              <SelectTrigger>
                <SelectValue placeholder="Seleccionar orden" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="asc">Ascendente</SelectItem>
                <SelectItem value="desc">Descendente</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardContent>
      <CardFooter>
        <Button onClick={onApplyDateFilters} className="w-full bg-pink-500 hover:bg-pink-700">
          Aplicar Filtros de Fecha
        </Button>
      </CardFooter>
    </Card>
  )
}