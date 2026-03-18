import { useCallback, useEffect, useRef, useState } from 'react';

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuSub,
  DropdownMenuSubTrigger,
  DropdownMenuSubContent,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { IconChevronRight, IconMonitor, IconMoon, IconPalette, IconSun } from '@/components/icons';

type Theme = 'light' | 'dark' | 'system' | string;

const THEME_GROUPS = [
  {
    label: 'Classic',
    labelKey: 'classic',
    themes: [
      { key: 'apple', label: 'Mac', color: '#0066cc' },
      { key: 'claude-theme', label: 'Claude', color: '#b75c3d' },
      { key: 'wechat', label: '微信公众号原生', color: '#07c160' },
      { key: 'nyt', label: 'NYT', color: '#326891' },
      { key: 'medium', label: 'Medium', color: '#1a8917' },
      { key: 'stripe', label: 'Stripe', color: '#635bff' },
      { key: 'feishu', label: '飞书效率', color: '#3370ff' },
      { key: 'linear', label: 'Linear', color: '#5e6ad2' },
      { key: 'retro', label: 'Retro', color: '#8c2211' },
      { key: 'bloomberg', label: 'Bloomberg', color: '#15fa52' },
    ],
  },
  {
    label: 'Modern',
    labelKey: 'modern',
    themes: [
      { key: 'nord', label: 'Nord', color: '#88c0d0' },
      { key: 'rose', label: 'Rosé', color: '#f472b6' },
      { key: 'notion', label: 'Notion', color: '#37352f' },
      { key: 'github', label: 'GitHub', color: '#0969da' },
      { key: 'xiaohongshu', label: '少数派', color: '#d71a1b' },
      { key: 'dracula', label: 'Dracula', color: '#bd93f9' },
      { key: 'sakura', label: '樱花', color: '#c44569' },
      { key: 'ocean', label: '深海', color: '#ff6b6b' },
      { key: 'mint', label: '薄荷', color: '#1a7a5a' },
      { key: 'sunset', label: '日落', color: '#c0582a' },
      { key: 'monokai', label: 'Monokai', color: '#f92672' },
    ],
  },
  {
    label: 'Extra',
    labelKey: 'extra',
    themes: [
      { key: 'solarized', label: 'Solarized', color: '#268bd2' },
      { key: 'cyberpunk', label: 'Cyberpunk', color: '#05d9e8' },
      { key: 'ink', label: '水墨', color: '#111111' },
      { key: 'lavender', label: '薰衣草', color: '#6b4c9a' },
      { key: 'forest', label: '密林', color: '#7dce82' },
      { key: 'glacier', label: '冰川', color: '#1565c0' },
      { key: 'coffee', label: '咖啡', color: '#6d4c41' },
      { key: 'bauhaus', label: 'Bauhaus', color: '#004d9f' },
      { key: 'copper', label: '赤铜', color: '#e8a87c' },
    ],
  },
  {
    label: 'Sci-Fi',
    labelKey: 'scifi',
    themes: [
      { key: 'matrix', label: 'Matrix', color: '#00ff41' },
      { key: 'blackmirror', label: 'Black Mirror', color: '#4fc3f7' },
      { key: 'evolution', label: 'Evolution', color: '#66bb6a' },
      { key: 'protoss', label: 'Protoss', color: '#ffd700' },
      { key: 'zerg', label: 'Zerg', color: '#9c27b0' },
      { key: 'terran', label: 'Terran', color: '#ff8f00' },
      { key: 'mechanicus', label: 'Mechanicus', color: '#b71c1c' },
      { key: 'threebody', label: 'Three-Body', color: '#1e88e5' },
      { key: 'zimablue', label: 'Zima Blue', color: '#2979ff' },
      { key: 'westworld', label: 'Westworld', color: '#d4a76a' },
      { key: 'poi', label: 'The Machine', color: '#f44336' },
    ],
  },
] as const;

const ALL_CUSTOM_KEYS = THEME_GROUPS.flatMap((g) => g.themes.map((t) => t.key));
const ALL_THEME_CLASSES = ['light', 'dark', ...ALL_CUSTOM_KEYS];

interface ModeSwitcherProps {
  labels?: { light: string; dark: string; system: string; moreThemes: string; classic: string; modern: string; extra: string; scifi: string };
}

function resolveTheme(theme: Theme): string {
  if (theme === 'system') {
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  }
  return theme;
}

function useThemeLocal() {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'system';
    return localStorage.getItem('theme') || 'system';
  });

  const setTheme = useCallback((newTheme: Theme) => {
    localStorage.setItem('theme', newTheme);
    setThemeState(newTheme);

    const root = document.documentElement;
    ALL_THEME_CLASSES.forEach((cls) => root.classList.remove(cls));
    root.classList.add(resolveTheme(newTheme));
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const handler = () => {
      if (theme === 'system') {
        const root = document.documentElement;
        ALL_THEME_CLASSES.forEach((cls) => root.classList.remove(cls));
        root.classList.add(mediaQuery.matches ? 'dark' : 'light');
      }
    };
    mediaQuery.addEventListener('change', handler);
    return () => mediaQuery.removeEventListener('change', handler);
  }, [theme]);

  return { theme, setTheme };
}

export default function ModeSwitcher({
  labels = { light: 'Light', dark: 'Dark', system: 'System', moreThemes: 'More Themes', classic: 'Classic', modern: 'Modern', extra: 'Extra', scifi: 'Sci-Fi' },
}: ModeSwitcherProps) {
  const { theme, setTheme } = useThemeLocal();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [resolvedTheme, setResolvedTheme] = useState<string>(theme);

  useEffect(() => {
    setResolvedTheme(resolveTheme(theme));
  }, [theme]);

  const changeTheme = useCallback(
    (newTheme: Theme) => {
      const button = triggerRef.current;

      if (!document.startViewTransition || !button) {
        setTheme(newTheme);
        return;
      }

      const rect = button.getBoundingClientRect();
      const x = rect.left + rect.width / 2;
      const y = rect.top + rect.height / 2;
      const right = window.innerWidth - rect.left;
      const bottom = window.innerHeight - rect.top;
      const maxRadius = Math.hypot(
        Math.max(rect.left, right),
        Math.max(rect.top, bottom)
      );

      const transition = document.startViewTransition(() => {
        setTheme(newTheme);
      });

      transition.ready.then(() => {
        document.documentElement.animate(
          {
            clipPath: [
              `circle(0px at ${x}px ${y}px)`,
              `circle(${maxRadius}px at ${x}px ${y}px)`,
            ],
          },
          {
            duration: 700,
            easing: 'ease-in-out',
            pseudoElement: '::view-transition-new(root)',
          }
        );
      });
    },
    [setTheme]
  );

  const isCustomTheme = ALL_CUSTOM_KEYS.includes(theme as any);

  const baseItems: { key: 'light' | 'dark' | 'system'; label: string; icon: typeof IconSun }[] = [
    { key: 'light', label: labels.light, icon: IconSun },
    { key: 'dark', label: labels.dark, icon: IconMoon },
    { key: 'system', label: labels.system, icon: IconMonitor },
  ];

  // Find which group the current theme belongs to
  const activeGroup = THEME_GROUPS.find((g) =>
    g.themes.some((t) => t.key === theme)
  );

  return (
    <DropdownMenu>
      <DropdownMenuTrigger
        ref={triggerRef}
        className="inline-flex items-center justify-center size-[34px] rounded cursor-pointer text-[var(--color-nav-text)] hover:text-[var(--color-nav-text-hover)]"
        aria-label="Toggle theme"
      >
        <span className="relative inline-flex size-[18px] items-center justify-center">
          <IconSun className="size-[18px] rotate-0 scale-100 transition-transform duration-500 ease-in-out dark:-rotate-45 dark:scale-0" />
          <IconMoon className="absolute size-[18px] rotate-45 scale-0 transition-transform duration-500 ease-in-out dark:rotate-0 dark:scale-100" />
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        {baseItems.map(({ key, label, icon: Icon }) => (
          <DropdownMenuItem key={key} onClick={() => changeTheme(key)}>
            <Icon className="mr-2 size-4" />
            <span className={resolvedTheme === key && !isCustomTheme ? 'font-semibold text-primary' : ''}>
              {label}
            </span>
          </DropdownMenuItem>
        ))}
        <DropdownMenuSeparator />
        <DropdownMenuSub>
          <DropdownMenuSubTrigger>
            <IconPalette className="mr-2 size-4" />
            <span className={isCustomTheme ? 'font-semibold text-primary' : ''}>
              {labels.moreThemes}
            </span>
            <IconChevronRight className="ml-auto size-3.5" />
          </DropdownMenuSubTrigger>
          <DropdownMenuSubContent>
            {THEME_GROUPS.map((group, gi) => (
              <DropdownMenuSub key={group.label}>
                <DropdownMenuSubTrigger>
                  <span className={activeGroup?.label === group.label ? 'font-semibold text-primary' : ''}>
                    {labels[group.labelKey as keyof typeof labels] || group.label}
                  </span>
                  <IconChevronRight className="ml-auto size-3.5" />
                </DropdownMenuSubTrigger>
                <DropdownMenuSubContent>
                  {group.themes.map(({ key, label, color }) => (
                    <DropdownMenuItem key={key} onClick={() => changeTheme(key)}>
                      <span
                        className="mr-2 inline-block size-3 rounded-full ring-1 ring-foreground/20"
                        style={{ backgroundColor: color }}
                      />
                      <span className={theme === key ? 'font-semibold text-primary' : ''}>
                        {label}
                      </span>
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuSubContent>
              </DropdownMenuSub>
            ))}
          </DropdownMenuSubContent>
        </DropdownMenuSub>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
