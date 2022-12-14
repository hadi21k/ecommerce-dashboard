import { AnimatePresence, motion } from "framer-motion";
import { useStore } from "../../context/context";
import TableChild from "./TableChild";

const TableOrders = () => {
  const { filterOrders } = useStore();
  return (
    <div className="overflow-x-auto scrollbar-hide max-lg:hidden">
      <div className="min-w-max text-sm">
        <div className="mb-8 grid w-full grid-cols-6 px-2">
          <h1 className="flex items-center justify-start font-medium tracking-wide">
            Created At
          </h1>
          <h1 className="flex items-center justify-center font-medium tracking-wide">
            Customer Name
          </h1>
          <h1 className="flex items-center justify-center font-medium tracking-wide">
            Price
          </h1>
          <h1 className="flex items-center justify-center font-medium tracking-wide">
            Quantity
          </h1>
          <h1 className="flex items-center justify-center font-medium tracking-wide">
            Product Name
          </h1>
          <h1 className="flex items-center justify-center font-medium tracking-wide">
            Status
          </h1>
        </div>
        <div className="space-y-4 pb-24">
          <AnimatePresence>
            {filterOrders.map(
              (
                order: {
                  id: string;
                  customerName: string;
                  price: number;
                  quantity: number;
                  product: string;
                  date: string;
                  time: string;
                  status: string;
                },
                i: number
              ) => (
                <motion.div
                  layout
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  key={order.id}
                  transition={{
                    layout: { duration: 1.2, ease: "linear", type: "spring" },
                    opacity: { duration: 0.2, delay: 0.1 },
                  }}
                  className="grid h-12 w-full min-w-max grid-cols-6 place-items-center rounded px-2 text-base"
                >
                  <TableChild order={order} index={i} />
                </motion.div>
              )
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default TableOrders;
