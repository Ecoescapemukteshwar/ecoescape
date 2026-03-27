from pytrends.request import TrendReq
import numpy as np
import time
import pandas as pd
import json
from datetime import datetime

KEYWORDS = [
    "mukteshwar",
    "mukteshwar hotel",
    "mukteshwar resort",
    "homestay in mukteshwar",
    "hill station near delhi",
]

def get_demand_multiplier():
    try:
        pytrends = TrendReq(hl="en-IN", tz=330)

        series_list = []
        for i in range(0, len(KEYWORDS), 5):
            batch = KEYWORDS[i:i+5]
            pytrends.build_payload(batch, timeframe="today 3-m", geo="IN")
            df = pytrends.interest_over_time()
            if not df.empty:
                series_list.append(df[batch].mean(axis=1))
            time.sleep(1)

        if not series_list:
            raise ValueError("No data")

        s = pd.concat(series_list, axis=1).mean(axis=1)

        recent = s.tail(7).mean()
        baseline = s.tail(28).head(21).mean()
        growth = float(recent / baseline if baseline else 1)

        # Convert growth → multiplier (dampen impact)
        mult = 1 + (growth - 1) * 0.3   # dampen impact

        # NO CLAMPING - Frontend weighting handles extreme values
        # The multiplier can now be ANY value based on Google Trends

        result = {
            "value": round(mult, 3),
            "source": "google_trends",
            "lastUpdated": datetime.now().isoformat(),
            "raw": {
                "growth": round(growth, 3),
                "keywords": KEYWORDS
            }
        }

        # Write to JSON file (public directory - fetched dynamically at runtime)
        output_path = "public/demand-multiplier.json"
        with open(output_path, "w") as f:
            json.dump(result, f, indent=2)

        print(f"✅ Demand multiplier updated: {mult} (no clamping - frontend handles weighting)")
        print(f"📅 Last updated: {result['lastUpdated']}")

        return result

    except Exception as e:
        # On error, write fallback value
        fallback = {
            "value": 1.00,
            "source": "error",
            "lastUpdated": datetime.now().isoformat(),
            "error": str(e)
        }

        # Write fallback to public directory
        output_path = "public/demand-multiplier.json"
        with open(output_path, "w") as f:
            json.dump(fallback, f, indent=2)

        print(f"❌ Error: {e}")
        print(f"📝 Fallback value (1.0) written")
        return fallback

if __name__ == "__main__":
    get_demand_multiplier()

