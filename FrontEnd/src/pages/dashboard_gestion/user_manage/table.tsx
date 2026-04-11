import {
  faMagnifyingGlass,
  faSliders,
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// ─── Types ───────────────────────────────────────────────────────────────────

type Status = "Verified" | "Pending" | "Flagged";
type Group  = "CURATORIAL" | "LOGISTICS" | "EXTERNAL" | "LEGAL" | "RESEARCH";

interface ArchiveRecord {
  id:          string;
  name:        string;
  group:       Group;
  email:       string;
  institution: string;
  status:      Status;
  amount:      string;
}

// ─── Static Data ─────────────────────────────────────────────────────────────

const RECORDS: ArchiveRecord[] = [
  { id: "#ARK-9021", name: "Alexander Sterling", group: "CURATORIAL", email: "a.sterling@archive.org",  institution: "The Royal Academy",    status: "Verified", amount: "$12,450.00"  },
  { id: "#ARK-8842", name: "Helena Vance",        group: "LOGISTICS",  email: "h.vance@institutional.edu", institution: "Metropolitan Library", status: "Pending",  amount: "$8,120.00"   },
  { id: "#ARK-7731", name: "Marcus Thorne",       group: "EXTERNAL",   email: "m.thorne@vanguard.com",  institution: "Vanguard Institute",   status: "Verified", amount: "$45,000.00"  },
  { id: "#ARK-6219", name: "Isabella Rossi",      group: "CURATORIAL", email: "i.rossi@florence.it",    institution: "Rossi Collection",     status: "Flagged",  amount: "$3,400.00"   },
  { id: "#ARK-5510", name: "Julian Chen",         group: "LEGAL",      email: "j.chen@heritage.org",    institution: "Heritage Trust",       status: "Verified", amount: "$128,500.00" },
  { id: "#ARK-4103", name: "Sophia Wright",       group: "RESEARCH",   email: "s.wright@university.edu",institution: "Global Research Fund", status: "Verified", amount: "$54,200.00"  },
];

const COLUMNS = ["ID", "Name", "Group", "Email Address", "Institution", "Status", "Amount"];

// ─── Sub-components ───────────────────────────────────────────────────────────

function StatusBadge({ status }: { status: Status }) {
  const dot: Record<Status, string> = {
    Verified: "bg-emerald-500",
    Pending:  "bg-amber-400",
    Flagged:  "bg-red-500",
  };
  return (
    <div className="flex items-center gap-1.5">
      <span className={`w-1.5 h-1.5 rounded-full ${dot[status]}`} />
      <span className="text-xs font-medium text-on-surface">{status}</span>
    </div>
  );
}

function GroupBadge({ group }: { group: Group }) {
  return (
    <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-[10px] font-bold tracking-wide text-on-surface-variant">
      {group}
    </span>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function ArchiveDataTable() {
  return (
    <div className="bg-surface-container-lowest rounded-xl shadow-sm border-2 border-gray-100 border-outline-variant/5 overflow-hidden w-full bg-white">

      {/* ── Filter Bar ── */}
      <div className="p-6 flex flex-col md:flex-row md:items-center justify-between gap-4 border-outline-variant/10">
        <div className="flex flex-1 items-center gap-3 flex-wrap max-w-2xl">

          {/* Search */}
          <div className="relative flex-1 min-w-50">
            <FontAwesomeIcon
              icon={faMagnifyingGlass}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-on-surface-variant text-sm"
            />
            <input
              type="text"
              readOnly
              placeholder="Search archive records..."
              className="w-full bg-surface-container-highest/50 border-none rounded-lg pl-10 pr-4 py-2.5 text-sm placeholder:text-on-surface-variant/50"
            />
          </div>

          {/* Filters button */}
          <button className="flex items-center gap-2 px-4 py-2.5 bg-surface-container-high text-on-surface rounded-lg text-xs font-semibold tracking-wide">
            <FontAwesomeIcon icon={faSliders} className="text-sm" />
            Filters
          </button>

          {/* Category select */}
          <select
            disabled
            className="bg-surface-container-high border-none rounded-lg px-4 py-2.5 text-xs font-semibold tracking-wide text-on-surface focus:ring-0 appearance-none min-w-[140px]"
          >
            <option>All Categories</option>
            <option>CURATORIAL</option>
            <option>LOGISTICS</option>
            <option>EXTERNAL</option>
            <option>LEGAL</option>
            <option>RESEARCH</option>
          </select>
        </div>
      </div>

      {/* ── Table ── */}
      <div className="overflow-x-auto w-full">
        <table className="w-full text-left border-collapse">
          <thead className="bg-gray-100">
            <tr className="bg-surface-container-low/50">
              {COLUMNS.map((col) => (
                <th
                  key={col}
                  className={`px-6 py-4 text-[10px] font-bold uppercase tracking-[0.15em] text-on-surface-variant whitespace-nowrap ${
                    col === "Amount" ? "text-right" : ""
                  }`}
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {RECORDS.map((row) => (
              <tr key={row.id} className="hover:bg-surface-container-low/30 border-b border-gray-300">
                <td className="px-6 py-5 text-sm font-mono text-on-surface-variant">{row.id}</td>
                <td className="px-6 py-5 text-sm font-semibold text-on-surface">{row.name}</td>
                <td className="px-6 py-5"><GroupBadge group={row.group} /></td>
                <td className="px-6 py-5 text-sm text-on-surface-variant font-light">{row.email}</td>
                <td className="px-6 py-5 text-sm text-on-surface-variant">{row.institution}</td>
                <td className="px-6 py-5"><StatusBadge status={row.status} /></td>
                <td className="px-6 py-5 text-sm font-bold text-on-surface text-right tracking-tight">{row.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* ── Pagination ── */}
      <div className="p-6 flex items-center justify-between bg-surface-container-low/20">
        <span className="text-xs font-medium text-on-surface-variant">
          Showing 1 to 6 of 1,248 entries
        </span>
        <div className="flex gap-2">
          <button className="p-2 bg-surface-container-high rounded-lg text-on-surface-variant opacity-40 cursor-not-allowed">
            <FontAwesomeIcon icon={faChevronLeft} className="text-sm" />
          </button>
          {[1, 2, 3].map((n) => (
            <button
              key={n}
              className={`px-4 py-1.5 rounded-lg text-xs font-bold ${
                n === 1
                  ? "bg-primary text-on-primary"
                  : "bg-surface-container-high text-on-surface-variant"
              }`}
            >
              {n}
            </button>
          ))}
          <button className="p-2 bg-surface-container-high rounded-lg text-on-surface-variant">
            <FontAwesomeIcon icon={faChevronRight} className="text-sm" />
          </button>
        </div>
      </div>

    </div>
  );
}